import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import { Provider } from '.';

export const Flagd: Provider = {
  name: 'flagd',
  logo: FlagdSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd-web',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagd',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagd',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.Flagd',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/Flagd',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/python-sdk-contrib/tree/main/providers/openfeature-provider-flagd',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/rust-sdk-contrib/tree/main/crates/flagd',
      category: ['Server'],
    },
  ],
};
