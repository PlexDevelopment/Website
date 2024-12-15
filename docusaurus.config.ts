import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Plex',
    tagline: 'Welcome to the website and documentation for Plex!',
    favicon: 'img/favicon.ico',

    url: 'https://docs.plex.us.org',
    baseUrl: '/',

    organizationName: 'plexusorg', // Usually your GitHub org/user name.
    projectName: 'Website', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/plexusorg/Website/tree/new',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'Plex',
            logo: {
                alt: 'Plex Logo',
                src: 'img/plexlogo.png',
            },
            items: [
                {
                    to: '/docs/intro',
                    label: 'Introduction',
                    position: 'left'
                },
                {
                    to: '/docs/compiling',
                    label: 'Compiling',
                    position: 'left'
                },
                {
                    to: '/docs/permissions',
                    label: 'Permissions',
                    position: 'left'
                },
                {
                    position: 'left',
                    label: 'Javadocs',
                    to: 'pathname:///javadoc',
                },
                {
                    position: 'left',
                    label: 'Downloads',
                    to: 'https://ci.plex.us.org',
                },
                {
                    position: 'right',
                    label: 'GitHub',
                    href: 'https://github.com/plexusorg',
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
                            label: 'Permissions',
                            to: '/docs/permissions',
                        },
                        {
                            label: 'Javadocs',
                            to: 'pathname:///javadoc',
                        },
                        {
                            label: 'Downloads',
                            to: 'https://ci.plex.us.org',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/MzjRjFAcrZ',
                        },
                    ],
                },
                {
                    title: 'GitHub',
                    items: [
                        {
                            label: 'Plex',
                            href: 'https://github.com/plexusorg/Plex',
                        },
                        {
                            label: 'Docs',
                            href: 'https://github.com/plexusorg/Website',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Plexus Development. Symbols from <a href="https://fontawesome.com/license">FontAwesome</a>. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['java', 'bash', 'kotlin'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
