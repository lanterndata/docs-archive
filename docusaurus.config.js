// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lantern',
  tagline: 'PostgreSQL-based database for AI',
  favicon: 'img/favicon.ico',
  url: 'https://docs.lantern.dev',
  baseUrl: '/',
  organizationName: 'lanterndata',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/lanterndata/docs',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Lantern logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
          href: 'https://lantern.dev',
          target: '_self',
        },
        items: [
          {
            to: '/docs',
            label: 'Docs',
            position: 'left',
            style: {
              marginRight: '8px'
            }
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
            style: {
              marginRight: '8px'
            }
          },
          {
            target: '_self',
            href: 'https://github.com/lanterndata/lantern',
            label: 'GitHub',
            position: 'right',
            style: {
              marginRight: '8px'
            }
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: ` Lantern Systems, Inc. ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
