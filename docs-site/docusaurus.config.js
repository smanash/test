// @ts-check
// Docusaurus config for the Dhub proof of concept.
//
// This site deliberately mirrors the shape of our real docs-site:
//   - it lives in a SUBFOLDER of the repo (docs-site/), so the Dhub import must be given a
//     "project directory" — the one setting most likely to be got wrong in production
//   - the classic theme, which is what docusaurus-plugin-dhub requires (Docusaurus >= 3.5)
//   - an editUrl, so "Edit this page" already works before Dhub is added
//
// The content is FICTIONAL ("Northwind Analytics"). Nothing here is flexday.ai content —
// see the repository README for why that is deliberate.

import {themes as prismThemes} from 'prism-react-renderer';

const GITHUB_REPO = 'https://github.com/smanash/test';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Northwind Analytics',
  tagline: 'Turn a plain-English question into a working dashboard',
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
          sidebarPath: './sidebars.js',
          // "Edit this page" → GitHub's own web editor, on `develop`.
          // Docusaurus appends the doc's path relative to THIS site directory, so the base
          // must end at `docs-site/` — the plugin adds the `docs/` segment itself.
          editUrl: `${GITHUB_REPO}/edit/develop/docs-site/`,
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
        title: 'Northwind Analytics',
        logo: {
          alt: 'Northwind Analytics',
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
            to: '/docs/glossary',
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
              {label: 'Introduction', to: '/docs/intro'},
              {label: 'Getting started', to: '/docs/getting-started'},
              {label: 'Working with data', to: '/docs/working-with-data'},
              {label: 'Troubleshooting', to: '/docs/troubleshooting'},
            ],
          },
          {
            title: 'About this site',
            items: [
              {label: 'Glossary', to: '/docs/glossary'},
              {label: 'Repository', href: GITHUB_REPO},
            ],
          },
        ],
        copyright: `Dhub proof of concept · demo content only · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
