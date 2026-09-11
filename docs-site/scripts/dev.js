/**
 * Starts and SUPERVISES the two processes the POC needs:
 *
 *   1. the local pull helper (scripts/dev-pull-server.js) — what the Reload button calls
 *   2. the Docusaurus dev server
 *
 * WHY A SUPERVISOR RATHER THAN TWO SPAWNS. Both failure modes seen while building this POC are
 * survivable, and neither should end the session:
 *
 *   - The Docusaurus bundler was killed by Windows for running out of memory
 *     (`memory allocation of 5753691 bytes failed`, exit 0xC0000409) on a machine with other
 *     applications competing for RAM. Nothing is wrong with the site; it just needs starting again.
 *   - An earlier version took BOTH processes down whenever either one exited, so a bundler crash
 *     also silently killed the Reload button — two broken things to diagnose instead of one.
 *
 * So each child is restarted on its own, with backoff, and a crash in one is never allowed to
 * take the other with it. A run of rapid failures is a real fault and stops rather than looping
 * forever, because an endless restart loop hides the error message that explains it.
 *
 * Usage:  npm run dev                   (site on :3100, helper on :3101)
 *         npm run dev -- --port 3200
 */

'use strict';

const {spawn} = require('node:child_process');
const path = require('node:path');

const SITE_DIR = path.resolve(__dirname, '..');

// Restart policy. The window matters: a process that dies instantly, repeatedly, has a real
// fault (a syntax error, an occupied port) and restarting it forever would bury the reason in
// scrollback. One that runs for an hour and then dies has hit something transient, and the
// counter resets so it gets a full set of retries again.
const MAX_RESTARTS = 5;
const RESTART_WINDOW_MS = 60_000;
const BACKOFF_MS = [1000, 2000, 4000, 8000, 15000];

// Anything after `--` goes to Docusaurus (e.g. `npm run dev -- --port 3200`).
const passthrough = process.argv.slice(2);
const portArgs = passthrough.includes('--port') ? [] : ['--port', '3100'];
const sitePort =
  passthrough.includes('--port') ? passthrough[passthrough.indexOf('--port') + 1] : '3100';

const services = [
  {
    name: 'pull-helper',
    command: 'node',
    args: ['scripts/dev-pull-server.js'],
  },
  {
    name: 'site',
    command: 'npx',
    args: ['docusaurus', 'start', '--no-open', ...portArgs, ...passthrough],
  },
];

let shuttingDown = false;

/**
 * Kill a child AND its descendants.
 *
 * `shell: true` means the process we spawned is a shell and the real one is its CHILD, so on
 * Windows `child.kill()` kills the shell and leaves the grandchild holding its port — which is
 * exactly what happened after the out-of-memory crash: the launcher reported a clean shutdown
 * and the helper was still listening on 3101 afterwards.
 */
function killTree(child) {
  if (!child || !child.pid || child.killed) return;
  if (process.platform === 'win32') {
    spawn('taskkill', ['/PID', String(child.pid), '/T', '/F'], {
      stdio: 'ignore',
      detached: true,
      shell: true,
    }).unref();
  } else {
    child.kill();
  }
}

function start(service) {
  // shell:true so npm/npx shims resolve on Windows, where they are .cmd files.
  const child = spawn(service.command, service.args, {
    cwd: SITE_DIR,
    stdio: 'inherit',
    shell: true,
  });

  service.child = child;
  service.startedAt = Date.now();

  child.on('exit', (code, signal) => {
    if (shuttingDown) return;

    // A process that survived the window was healthy; this is a fresh problem, not a loop.
    if (Date.now() - service.startedAt > RESTART_WINDOW_MS) {
      service.restarts = 0;
    }

    service.restarts = (service.restarts || 0) + 1;

    if (service.restarts > MAX_RESTARTS) {
      console.error(
        `\n[dev] ${service.name} has failed ${MAX_RESTARTS} times in quick succession. ` +
          `Not restarting again — the error above is the one to read.\n`,
      );
      return;
    }

    const wait = BACKOFF_MS[Math.min(service.restarts - 1, BACKOFF_MS.length - 1)];
    const why = signal || `exit code ${code}`;
    const oom = code === 3221226505 || code === 134; // Windows abort / SIGABRT — typically OOM
    console.error(
      `\n[dev] ${service.name} stopped (${why})${oom ? ' — looks like it ran out of memory' : ''}. ` +
        `Restarting in ${wait / 1000}s (${service.restarts}/${MAX_RESTARTS})…\n`,
    );

    setTimeout(() => {
      if (!shuttingDown) start(service);
    }, wait).unref();
  });

  return child;
}

function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log('\n[dev] shutting down…');
  for (const service of services) killTree(service.child);
  setTimeout(() => process.exit(code), 300).unref();
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

console.log('\n────────────────────────────────────────────────');
console.log('  Dhub POC — starting');
console.log(`  site    http://localhost:${sitePort}`);
console.log('  helper  http://127.0.0.1:3101   (the Reload button)');
console.log('  Leave this window open. Ctrl+C to stop.');
console.log('────────────────────────────────────────────────\n');

for (const service of services) start(service);
