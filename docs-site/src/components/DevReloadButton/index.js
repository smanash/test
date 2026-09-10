import {useCallback, useEffect, useState} from 'react';
import styles from './styles.module.css';

// The local helper started by `npm run dev` (see scripts/dev-pull-server.js).
const PULL_SERVER = 'http://127.0.0.1:3101';

// After a successful pull the Docusaurus dev server needs a moment to notice the changed files
// and recompile. Reloading instantly lands on a half-built page, which reads as a broken button.
const RELOAD_DELAY_MS = 1200;

/**
 * A floating "Reload" button that runs `git pull` and refreshes the page.
 *
 * The problem it solves: a Dhub edit merged on GitHub does not touch this machine, so the site
 * keeps showing the old text however many times you refresh. That one missing step is what makes
 * a live demo look broken. This makes it a single click.
 *
 * Rendered in DEVELOPMENT ONLY — see src/theme/Root.js.
 */
export default function DevReloadButton() {
  const [state, setState] = useState('idle'); // idle | pulling | done | nochange | error | offline
  const [message, setMessage] = useState('');

  // Ask the helper whether it is running, so an unreachable helper is reported as exactly that
  // rather than surfacing later as a confusing failure on click.
  useEffect(() => {
    let cancelled = false;
    fetch(`${PULL_SERVER}/health`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('unhealthy'))))
      .catch(() => {
        if (!cancelled) {
          setState('offline');
          setMessage('Helper not running — start the site with `npm run dev`');
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const onClick = useCallback(async () => {
    if (state === 'pulling') return;
    setState('pulling');
    setMessage('Pulling from main…');

    try {
      const res = await fetch(`${PULL_SERVER}/pull`, {method: 'POST'});
      const data = await res.json();

      if (!data.ok) {
        setState('error');
        // A network blip and a real git problem need opposite responses from a person: one is
        // "click it again", the other is "go and look at the repository". Saying so beats
        // printing git's raw words for both — the transient one has already been retried.
        setMessage(
          data.transient
            ? `Network hiccup reaching GitHub (retried ${data.attempts}×). Click Reload again.`
            : data.output || 'git pull failed',
        );
        return;
      }

      if (!data.changed) {
        setState('nochange');
        setMessage('Already up to date — nothing new on main');
        return;
      }

      const n = data.files.length;
      setState('done');
      setMessage(`Updated ${n} file${n === 1 ? '' : 's'} — reloading…`);
      setTimeout(() => window.location.reload(), RELOAD_DELAY_MS);
    } catch {
      setState('offline');
      setMessage('Could not reach the helper on port 3101');
    }
  }, [state]);

  const busy = state === 'pulling';
  const disabled = busy || state === 'offline';

  return (
    <div className={styles.wrap}>
      {message ? (
        <div className={styles.message} data-state={state} role="status" aria-live="polite">
          {message}
        </div>
      ) : null}
      <button
        type="button"
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
        data-state={state}
        title={
          state === 'offline'
            ? 'The local pull helper is not running. Start the site with: npm run dev'
            : 'Run git pull on main and refresh this page'
        }>
        <span className={busy ? styles.spinner : styles.icon} aria-hidden="true" />
        {busy ? 'Pulling…' : 'Reload'}
      </button>
    </div>
  );
}
