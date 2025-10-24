import MultiProviderSvg from '@site/static/img/multi-provider-no-file.svg';
import { Provider } from '.';

export const MultiProvider: Provider = {
  name: 'Multi-Provider',
  logo: MultiProviderSvg,
  excludeFromLandingPage: true,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk/tree/main/packages/server#multi-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk/tree/main/packages/web#multi-provider',
      category: ['Client'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/multiprovider',
      category: ['Server'],
    },
  ],
};
