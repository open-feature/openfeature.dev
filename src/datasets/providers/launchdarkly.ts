import LaunchDarklyNoFillSvg from '@site/static/img/launchdarkly-no-fill.svg';
import { Provider } from '.';

export const LaunchDarkly: Provider = {
  name: 'LaunchDarkly',
  logo: LaunchDarklyNoFillSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-node-server',
      category: ['Server-side'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/launchdarkly-client',
      category: ['Client-side'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/launchdarkly',
      category: ['Server-side'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-java-server',
      category: ['Server-side'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-dotnet-server',
      category: ['Server-side'],
    },
  ],
};
