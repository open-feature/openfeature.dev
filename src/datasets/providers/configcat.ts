import ConfigCatSvg from '@site/static/img/config-cat-no-fill.svg';
import { Provider } from '.';

export const ConfigCat: Provider = {
  name: 'ConfigCat',
  logo: ConfigCatSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/config-cat',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/config-cat-web',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/configcat',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/configcat',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.ConfigCat',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://github.com/configcat/openfeature-php',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/configcat/openfeature-python',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://github.com/configcat/openfeature-rust',
      category: ['Server'],
    },
  ],
};
