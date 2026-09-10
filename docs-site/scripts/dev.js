/**
 * Starts BOTH processes the POC needs, so the demo is one command:
 *
 *   1. the local pull helper (scripts/dev-pull-server.js) — what the Reload button calls
 *   2. the Docusaurus dev server
 *
 * Written as a launcher rather than adding `concurrently` as a dependency: two spawns and a
 * shared shutdown is less to install and less to explain than a tool whose only job here is to
 * run two commands.
 *
 * Usage:  npm run dev            (site on :3100, helper on :3101)
 *         npm run dev -- --port 3200
 */

'use strict';

const {spawn} = require('node:child_process');
const path = require('node:path');

const SITE_DIR = path.resolve(__dirname, '..');
const children = [];
let shuttingDown = false;

function start(name, command, args, options = {}) {
  // shell:true so this works with npm/npx shims on Windows, where the executables are .cmd files.
  const child = spawn(command, args, {
    cwd: SITE_DIR,
    stdio: 'inherit',
    shell: true,
    ...options,
  });

  child.on('exit', (code, signal) => {
    if (shuttingDown) return;
    // If either process dies, take the other with it — a half-running pair is the state where
    // the button silently stops working and nobody knows why.
    console.error(`\n[dev] ${name} exited (${signal || `code ${code}`}). Shutting down.`);
    shutdown(typeof code === 'number' ? code : 1);
  });

  children.push({name, child});
  return child;
}

function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const {child} of children) {
    if (!child.killed) child.kill();
  }
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

// Anything after `--` is forwarded to Docusaurus (e.g. `npm run dev -- --port 3200`).
const passthrough = process.argv.slice(2);
const port = passthrough.includes('--port') ? null : ['--port', '3100'];

console.log('[dev] starting the pull helper and the site…\n');
start('pull-helper', 'node', ['scripts/dev-pull-server.js']);
start('docusaurus', 'npx', [
  'docusaurus',
  'start',
  '--no-open',
  ...(port || []),
  ...passthrough,
]);
