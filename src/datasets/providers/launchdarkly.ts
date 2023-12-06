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
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/launchdarkly-client',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/launchdarkly',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-java-server',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-dotnet-server',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-php-server',
      category: ['Server'],
    },
  ],
};
