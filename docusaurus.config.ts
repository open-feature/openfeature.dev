import type { Options as PresetClassicOptions } from '@docusaurus/preset-classic';
import type { UserThemeConfig as ThemeCommonConfig } from '@docusaurus/theme-common';
import type { UserThemeConfig as AlgoliaThemeConfig } from '@docusaurus/theme-search-algolia';
import type { Config } from '@docusaurus/types';
import autoprefixer from 'autoprefixer';
import { themes } from 'prism-react-renderer';
import { rehypeGithubAlerts } from 'rehype-github-alerts';
import remarkGfm from 'remark-gfm';
import tailwindcss from 'tailwindcss';

import { processSdkReadmes } from './scripts/process-sdk-readmes';

const presetClassicOptions: PresetClassicOptions = {
  docs: {
    sidebarPath: require.resolve('./sidebars.js'),
    editUrl: (params) => {
      return `https://github.com/open-feature/openfeature.dev/edit/main/docs/${params.docPath}`;
    },
    rehypePlugins: [rehypeGithubAlerts],
    remarkPlugins: [remarkGfm],
  },
  blog: {
    showReadingTime: true,
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
        to: '/support-training',
        label: 'Support & Training',
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
  // announcements can go here
  announcementBar: {
    id: 'announcing-kubecon-na-25',
    content:
      '🎉️ Meet us in Atlanta for KubeCon + CloudNativeCon North America · Nov 10-13 ·<b><a target="_blank" href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/register/?utm_source=openfeature-dev&utm_medium=homepage&utm_campaign=10608228-KubeCon-NA-2025&utm_content=hero">Register Today!</a></b> 🥳️',
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
            label: 'BlueSky',
            href: 'https://bsky.app/profile/openfeature.dev',
          },
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
            href: 'https://www.youtube.com/@openfeature',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/open-feature',
          },
          {
            label: 'Trademarks',
            href: 'https://www.linuxfoundation.org/legal/trademark-usage',
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
    copyright: `© ${new Date().getFullYear()} OpenFeature is a Cloud Native Computing Foundation incubating project | Documentation Distributed under CC BY 4.0 | All Rights Reserved`,
  },
  prism: {
    theme: themes.oceanicNext,
    additionalLanguages: ['java', 'csharp', 'powershell', 'php', 'kotlin', 'ruby', 'dart'],
    magicComments: [
      {
        className: 'theme-code-block-highlighted-line',
        line: 'highlight-next-line',
        block: { start: 'highlight-start', end: 'highlight-end' },
      },
      {
        className: 'code-block-diff-remove-line',
        line: 'diff-remove',
        block: { start: 'diff-remove-block-start', end: 'diff-remove-block-end' },
      },
      {
        className: 'code-block-diff-add-line',
        line: 'diff-add',
        block: {
          start: 'diff-add-block-start',
          end: 'diff-add-block-end',
        },
      },
    ],
  },
};

const config: Config = {
  title: 'OpenFeature',
  tagline: 'Standardizing Feature Flagging for Everyone',
  customFields: {
    description:
      'OpenFeature is an open specification that provides a vendor-agnostic, community-driven API for feature flagging that works with your favorite feature flag management tool or in-house solution.',
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
        editUrl: (params) => {
          return `https://github.com/open-feature/community/edit/main/${params.docPath}`;
        },
        rehypePlugins: [rehypeGithubAlerts],
        remarkPlugins: [remarkGfm],
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
        documents: processSdkReadmes.paths,
        modifyContent: processSdkReadmes.modifyContent,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'specification',
        path: 'external-content/specification/specification',
        routeBasePath: 'specification',
        editUrl: (params) => {
          return `https://github.com/open-feature/spec/edit/main/specification/${params.docPath}`;
        },
        rehypePlugins: [rehypeGithubAlerts],
        remarkPlugins: [remarkGfm],
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
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-ZG0JSPYJXZ',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
