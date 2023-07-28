import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import { Provider } from '.';

export const Flagd: Provider = {
  name: 'FlagD',
  logo: FlagdSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd',
      category: ['Server-side'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd-web',
      category: ['Client-side'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagd',
      category: ['Server-side'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagd',
      category: ['Server-side'],
    },
    {
      technology: '.NET',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.Flagd',
      category: ['Server-side'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/Flagd',
      category: ['Server-side'],
    },
  ],
};
