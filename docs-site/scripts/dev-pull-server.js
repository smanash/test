/**
 * A tiny LOCAL-ONLY endpoint that runs `git pull`, so the Reload button on the site can fetch
 * the latest Dhub-merged changes without anyone touching a terminal.
 *
 * WHY THIS EXISTS AT ALL: the Docusaurus dev server watches files on DISK. A pull request merged
 * on GitHub changes nothing locally until somebody runs `git pull` — which is the single step
 * that makes a demo look broken ("I merged it and nothing happened"). This turns that step into
 * a button.
 *
 * THIS IS A DEV TOOL AND IS DELIBERATELY NARROW:
 *   - it binds to 127.0.0.1 ONLY, so nothing outside this machine can reach it
 *   - it accepts exactly one route (POST /pull) and runs exactly one fixed command
 *   - the command takes NO input from the request, so there is nothing to inject into
 *   - `--ff-only` means it refuses to create a merge commit; a divergent local branch is
 *     reported rather than silently merged
 *
 * Run it with the site: `npm run dev` (which starts both), or on its own: `node scripts/dev-pull-server.js`
 */

'use strict';

const http = require('node:http');
const { execFile } = require('node:child_process');
const path = require('node:path');

const PORT = Number(process.env.DEV_PULL_PORT || 3101);
// scripts/ -> docs-site/ -> the repo root, which is where the .git directory lives.
const REPO_ROOT = path.resolve(__dirname, '..', '..');

/** Run one fixed git command. No argument comes from the request — see the header. */
function git(args) {
  return new Promise((resolve) => {
    execFile('git', args, { cwd: REPO_ROOT, timeout: 60_000 }, (error, stdout, stderr) => {
      resolve({
        ok: !error,
        // git writes progress to stderr even on success, so both streams are reported.
        output: `${stdout || ''}${stderr || ''}`.trim(),
      });
    });
  });
}

/**
 * Network failures talking to GitHub are TRANSIENT and they look like a broken button.
 *
 * Observed live: `fatal: remote helper 'https' aborted session` — the identical command
 * succeeded moments later. Reporting that as a failure sends someone off to debug wiring that
 * is fine, mid-demo, while the change they merged sits there unpulled.
 *
 * The patterns below are all "the network let go", never "the repository is in a state you
 * must resolve" — a merge conflict, a diverged branch or a refused fast-forward must surface
 * IMMEDIATELY rather than being retried three times and reported late.
 */
const TRANSIENT_PATTERNS = [
  /remote helper .* aborted session/i,
  /could not read from remote repository/i,
  /unable to access .*: (could not resolve host|failed to connect|operation timed out)/i,
  /the remote end hung up unexpectedly/i,
  /rpc failed/i,
  /connection (timed out|reset|refused)/i,
  /early eof/i,
  /ssl.*(error|timeout)/i,
];

const isTransient = (output) => TRANSIENT_PATTERNS.some((re) => re.test(output));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** `git pull --ff-only`, retried only on the network-shaped failures above. */
async function pullWithRetry(maxAttempts = 3) {
  let last;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    last = await git(['pull', '--ff-only']);
    if (last.ok) return { ...last, attempts: attempt };

    if (!isTransient(last.output)) return { ...last, attempts: attempt };

    if (attempt < maxAttempts) {
      console.warn(`[dev-pull] transient failure (attempt ${attempt}/${maxAttempts}) — retrying`);
      await sleep(attempt * 700); // 0.7s, then 1.4s
    }
  }
  return { ...last, attempts: maxAttempts, transient: true };
}

function send(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    // The site runs on :3100 and this server on :3101 — different origins, so the browser
    // needs this to read the response. Localhost-bound, dev-only.
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  });
  res.end(payload);
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  // A liveness probe, so the button can tell "the helper isn't running" apart from
  // "the pull failed" — two very different things to show a person mid-demo.
  if (req.method === 'GET' && req.url === '/health') {
    return send(res, 200, { ok: true, repo: REPO_ROOT });
  }

  if (req.method === 'POST' && req.url === '/pull') {
    const branch = await git(['rev-parse', '--abbrev-ref', 'HEAD']);
    const before = await git(['rev-parse', 'HEAD']);
    const pull = await pullWithRetry();
    const after = await git(['rev-parse', 'HEAD']);

    if (!pull.ok) {
      console.error(`[dev-pull] FAILED after ${pull.attempts} attempt(s)\n${pull.output}`);
      return send(res, 500, {
        ok: false,
        // The browser says "network hiccup, try again" for a transient failure and shows git's
        // own words for anything else — because those need opposite responses from a person.
        transient: Boolean(pull.transient),
        attempts: pull.attempts,
        output: pull.output,
      });
    }

    const changed = before.output !== after.output;
    let files = [];
    if (changed) {
      // What actually moved — so the button can say "3 files" instead of a bare "done".
      const diff = await git(['diff', '--name-only', `${before.output}..${after.output}`]);
      files = diff.output.split('\n').map((s) => s.trim()).filter(Boolean);
    }

    console.log(`[dev-pull] ${changed ? `updated (${files.length} file(s))` : 'already up to date'}`);
    return send(res, 200, {
      ok: true,
      changed,
      branch: branch.output,
      files,
      output: pull.output,
    });
  }

  send(res, 404, { ok: false, output: 'Not found. Use POST /pull or GET /health.' });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[dev-pull] listening on http://127.0.0.1:${PORT}  (repo: ${REPO_ROOT})`);
});
