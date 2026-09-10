import DevReloadButton from '@site/src/components/DevReloadButton';

/**
 * `Root` wraps the entire app on every route, which makes it the one place to mount something
 * site-wide without touching each page.
 *
 * The Reload button is rendered in DEVELOPMENT ONLY. `process.env.NODE_ENV` is replaced with a
 * literal at build time, so in a production build this whole branch is removed by the bundler
 * and the component is never even shipped — a "run git pull" control has no business in a built
 * site, and it would be pointing at a helper that isn't there.
 */
export default function Root({children}) {
  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' ? <DevReloadButton /> : null}
    </>
  );
}
