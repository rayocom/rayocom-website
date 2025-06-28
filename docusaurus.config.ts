import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Angany.ai',
  tagline: 'Reimagining telecommunications with AI at its core — speak your vision, let AI build it.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://angany.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anganyAI', // Usually your GitHub org/user name.
  projectName: 'angany-website', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          // Angany Auth API
          'angany-auth': {
            specPath: 'static/openapi/angany-auth.json',
            outputDir: 'docs/api/angany-auth',
            sidebarOptions: {
              groupPathsBy: 'tag'
            },
            version: '1.0.0',
            label: 'Angany Auth API',
            baseUrl: '/api/angany-auth',
            versions: {
              '1.0.0': {
                specPath: 'static/openapi/angany-auth.json',
                outputDir: 'docs/api/angany-auth',
                label: 'v1.0.0',
                baseUrl: '/api/angany-auth',
              },
            },
          } satisfies OpenApiPlugin.Options,
          // Angany Configuration API  
          'angany-configuration': {
            specPath: 'static/openapi/angany-configuration.json',
            outputDir: 'docs/api/angany-configuration',
            sidebarOptions: {
              groupPathsBy: 'tag'
            },
            version: '1.0.0',
            label: 'Angany Configuration API',
            baseUrl: '/api/angany-configuration',
            versions: {
              '1.0.0': {
                specPath: 'static/openapi/angany-configuration.json',
                outputDir: 'docs/api/angany-configuration',
                label: 'v1.0.0',
                baseUrl: '/api/angany-configuration',
              },
            },
          } satisfies OpenApiPlugin.Options,
          // Angany App Data API
          'angany-app-data': {
            specPath: 'static/openapi/angany-app-data.json',
            outputDir: 'docs/api/angany-app-data',
            sidebarOptions: {
              groupPathsBy: 'tag'
            },
            version: '1.0.0',
            label: 'Angany App Data API',
            baseUrl: '/api/angany-app-data',
            versions: {
              '1.0.0': {
                specPath: 'static/openapi/angany-app-data.json',
                outputDir: 'docs/api/angany-app-data',
                label: 'v1.0.0',
                baseUrl: '/api/angany-app-data',
              },
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anganyAI/angany-website/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anganyAI/angany-website/tree/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    'docusaurus-theme-openapi-docs'
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/angany-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Angany.ai',
      logo: {
        alt: 'Angany.ai Logo',
        src: 'img/logo/logo-without-text.png',
      },
      items: [
        {
          to: '/vision',
          label: 'Our Vision',
          position: 'left',
        },
        {
          to: '/features',
          label: 'Features',
          position: 'left',
        },
        {
          to: '/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'right',
          label: 'Documentation',
        },
        {
          type: 'html',
          position: 'right',
          value: '<button class="navbar__button-element" onclick="window.open(\'https://beta.angany.ai\', \'_blank\')">Sign In</button><button class="navbar__signup-element" onclick="window.open(\'https://beta.angany.ai/sign-up\', \'_blank\')">Start for free</button>',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Angany.ai Logo',
        src: 'img/logo/logo-full-white.png',
        width: 160,
      },
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Our Vision',
              to: '/vision',
            },
            {
              label: 'Features',
              to: '/features',
            },
            {
              label: 'Roadmap',
              to: '/roadmap',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'API Documentation',
              to: '/docs/api',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/anganyAI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Angany.ai. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
