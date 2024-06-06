import MultiProviderSvg from '@site/static/img/multi-provider-no-file.svg';
import { Provider } from '.';

export const MultiProvider: Provider = {
  name: 'Multi-Provider',
  logo: MultiProviderSvg,
  excludeFromLandingPage: true,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/multi-provider',
      category: ['Server'],
    },
  ],
};
