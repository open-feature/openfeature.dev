import type { Options as PresetClassicOptions } from '@docusaurus/preset-classic';
import type { UserThemeConfig as ThemeCommonConfig } from '@docusaurus/theme-common';
import type { UserThemeConfig as AlgoliaThemeConfig } from '@docusaurus/theme-search-algolia';
import type { Config } from '@docusaurus/types';

import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import mdxMermaid from 'mdx-mermaid';
import { sdks } from './scripts/sdks';

const presetClassicOptions: PresetClassicOptions = {
  docs: {
    sidebarPath: require.resolve('./sidebars.js'),
    remarkPlugins: [mdxMermaid],
    editUrl: (params) => {
      return `https://github.com/open-feature/openfeature.dev/edit/main/docs/${params.docPath}`;
    },
  },
  blog: {
    showReadingTime: true,
    remarkPlugins: [mdxMermaid],
    // Please change this to your repo.
    // Remove this to remove the "edit this page" links.
    editUrl: 'https://github.com/open-feature/openfeature.dev/edit/main/',
    blogSidebarCount: 'ALL',
    blogSidebarTitle: 'All Blog Posts',
  },
  theme: {
    customCss: [
      require.resolve('./src/css/custom.css'),
      require.resolve('@fortawesome/fontawesome-svg-core/styles.css'),
    ],
  },
};

const themeConfig: ThemeCommonConfig & AlgoliaThemeConfig = {
  algolia: {
    appId: 'PH0VDWFP7Q',
    apiKey: '521034bef1ace79ba73f75d02324f83b',
    indexName: 'openfeature',
    contextualSearch: true,
  },
  image: 'img/opengraph.jpg',
  navbar: {
    title: '',
    logo: {
      alt: 'OpenFeature Logo',
      src: 'img/logo-dark.svg',
      srcDark: 'img/logo-light.svg',
    },
    items: [
      {
        type: 'doc',
        docId: 'reference/intro',
        position: 'left',
        label: 'Docs',
      },
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Specification',
        docsPluginId: 'specification',
      },
      {
        to: '/ecosystem',
        label: 'Ecosystem',
      },
      {
        type: 'doc',
        docId: 'README',
        position: 'left',
        docsPluginId: 'community',
        label: 'Community',
      },
      {
        type: 'doc',
        docId: 'tutorials/five-minutes-to-feature-flags',
        position: 'left',
        label: 'Tutorials',
      },
      { to: '/blog', label: 'Blog', position: 'left' },
      {
        href: 'https://github.com/open-feature',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub organization',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Sections',
        items: [
          {
            label: 'Docs',
            to: 'docs/reference/intro',
          },
          {
            label: 'Specification',
            to: 'specification',
          },
          {
            label: 'Community',
            to: 'community',
          },
          {
            label: 'Tutorials',
            to: 'docs/tutorials/five-minutes-to-feature-flags',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Twitter',
            href: 'https://twitter.com/openfeature',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/openfeature/',
          },
          {
            label: 'Join us on Slack',
            href: 'https://cloud-native.slack.com/archives/C0344AANLA1',
          },
          {
            label: 'YouTube',
            href: 'https://www.youtube.com/@openfeature834',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Website',
            href: '/',
          },
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/open-feature',
          },
          {
            html: `
            <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
            </a>
          `,
          },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} OpenFeature is a Cloud Native Computing Foundation sandbox project | Documentation Distributed under CC BY 4.0 | All Rights Reserved`,
  },
  prism: {
    theme: oceanicNext,
    additionalLanguages: ['java', 'csharp', 'powershell', 'php'],
  },
};

const config: Config = {
  title: 'OpenFeature',
  tagline: 'Standardizing Feature Flagging for Everyone',
  customFields: {
    description:
      'OpenFeature is an open standard that provides a vendor-agnostic, community-driven API for feature flagging that works with your favorite feature flag management tool.',
  },
  url: 'https://openfeature.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon-precomposed.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicons/favicon-light.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#ffffff',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-config',
        content: '/favicons/browserconfig.xml',
      },
    },
  ],
  presets: [['classic', presetClassicOptions]],
  plugins: [
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(tailwindcss);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'external-content/community',
        routeBasePath: 'community',
        exclude: ['.github/**/*', 'ISSUE_TEMPLATE/**'],
        sidebarPath: require.resolve('./external-content/community/docusaurus-sidebar.js'),
        remarkPlugins: [mdxMermaid],
        editUrl: (params) => {
          return `https://github.com/open-feature/community/edit/main/${params.docPath}`;
        },
        // ... other options
      },
    ],
    [
      'docusaurus-plugin-remote-content',
      {
        name: 'sdk-content',
        noRuntimeDownloads: true,
        sourceBaseUrl: 'https://raw.githubusercontent.com/open-feature/',
        outDir: 'docs/reference/technologies',
        documents: sdks.paths,
        modifyContent: sdks.modifyContent,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'specification',
        path: 'external-content/specification/specification',
        routeBasePath: 'specification',
        remarkPlugins: [mdxMermaid],
        editUrl: (params) => {
          return `https://github.com/open-feature/spec/edit/main/${params.docPath}`;
        },
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath: string) {
          if (existingPath.includes('/docs/specification')) {
            return [existingPath.replace('/docs/specification', '/specification')];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
    'docusaurus-plugin-sass',
  ],
  themeConfig,
};

export = config;
