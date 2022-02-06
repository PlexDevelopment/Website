// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plex Docs',
  tagline: 'The official documentation for Plex',
  url: 'https://docs.plex.us.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PlexDevelopment', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
  [
  'classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  ({
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PlexDevelopment/docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
  ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Plex',
      logo: {
        alt: 'Plex Logo',
        src: 'img/logo.svg',
      },
      items: [
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Introduction',
      },
      {
       type: 'doc',
       docId: 'compiling',
       position: 'left',
       label: 'Compiling',
     },
     {
       position: 'left',
       label: 'Javadocs',
       to: 'pathname:///javadocs',
     },
     {
      position: 'right',
      label: 'GitHub',
      href: 'https://github.com/PlexDevelopment',
    },
    ],
  },
  footer: {
    style: 'dark',
    links: [
    {
      title: 'Docs',
      items: [
      {
        label: 'Introduction',
        to: '/docs/intro',
      },
      {
        label: 'Compiling',
        to: '/docs/compiling',
      },
      {
        label: 'Javadocs',
        to: 'pathname:///javadocs',
      },
      ],
    },
    {
      title: 'Community',
      items: [
      {
        label: 'Forums',
        href: 'https://forum.plex.us.org',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/HZsdUnsRKc',
      },
      ],
    },
    {
      title: 'GitHub',
      items: [
      {
        label: 'Plex',
        href: 'https://github.com/PlexDevelopment/Plex',
      },
      {
        label: 'Docs',
        href: 'https://github.com/PlexDevelopment/docs',
      }
      ],
    },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Plex. Symbols from <a href="https://fontawesome.com/license">FontAwesome</a>. Built with Docusaurus.`,
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}),
};

module.exports = config;
