import OFLogo from '@site/static/img/logo-no-fill.svg';
import type { Provider } from '.';

export const OFREP: Provider = {
  name: 'OFREP',
  logo: OFLogo,
  excludeFromLandingPage: true,
  technologies: [
    {
      technology: 'JavaScript',
      category: ['Client'],
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/ofrep-web',
      vendorOfficial: true,
    },
    {
      technology: 'JavaScript',
      category: ['Server'],
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/ofrep',
      vendorOfficial: true,
    },
    {
      technology: 'Go',
      category: ['Server'],
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/ofrep',
      vendorOfficial: true,
    },
    {
      technology: 'Python',
      category: ['Server'],
      href: 'https://github.com/open-feature/python-sdk-contrib/tree/main/providers/openfeature-provider-ofrep',
      vendorOfficial: true,
    },
  ],
};
