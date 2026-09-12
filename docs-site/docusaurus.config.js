// @ts-check
// Docusaurus config for the Dhub proof of concept.
//
// This site deliberately mirrors the shape of our real docs-site:
//   - it lives in a SUBFOLDER of the repo (docs-site/), so the Dhub import must be given a
//     "project directory" — the one setting most likely to be got wrong in production
//   - the classic theme, which is what docusaurus-plugin-dhub requires (Docusaurus >= 3.5)
//   - an editUrl, so "Edit this page" already works before Dhub is added
//
// The content is the flexday.ai user manual, whose own cover states
// `Classification: Public`. This repository is PUBLIC, so everything here is world-readable
// and search-indexable — see the repository README.

import {themes as prismThemes} from 'prism-react-renderer';

const GITHUB_REPO = 'https://github.com/smanash/test';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flexday AI Studio',
  tagline: 'User manual',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://smanash.github.io',
  baseUrl: '/',

  organizationName: 'smanash',
  projectName: 'test',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // DOCS-ONLY MODE, matching the real site this manual is written for.
          // The manual's own cross-references are absolute (`/glossary#workspace`,
          // `/part4-your-data`) because there the docs ARE the site. Serving them under `/docs/`
          // instead would make every one of those a broken link — and `onBrokenLinks: 'throw'`
          // would fail the build rather than ship a manual whose glossary cannot be reached.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // "Edit this page" → GitHub's own web editor, on `main`.
          // The POC runs on a SINGLE branch: Dhub connects to `main`, the ruleset protects
          // `main`, and this link targets `main`. The real project uses `develop` as its
          // protected integration branch; here a second branch would be one more thing to keep
          // in step for no benefit.
          //
          // Docusaurus appends the doc's path relative to THIS site directory, so the base must
          // end at `docs-site/` — the plugin adds the `docs/` segment itself.
          editUrl: `${GITHUB_REPO}/edit/main/docs-site/`,
        },
        // No blog on this POC — fewer moving parts to explain in a demo.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Flexday AI Studio',
        logo: {
          alt: 'Flexday AI Studio',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            to: '/glossary',
            label: 'Glossary',
            position: 'left',
          },
          {
            href: GITHUB_REPO,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'User Guide',
            items: [
              {label: 'Introduction', to: '/'},
              {label: 'Getting started', to: '/part1-getting-started'},
              {label: 'Your data', to: '/part4-your-data'},
              {label: 'Reference', to: '/part9-reference'},
            ],
          },
          {
            title: 'About this site',
            items: [
              {label: 'Glossary', to: '/glossary'},
              {label: 'Repository', href: GITHUB_REPO},
            ],
          },
        ],
        copyright: `Dhub proof of concept · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
