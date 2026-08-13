import UnleashSvg from '@site/static/img/unleash-no-fill.svg';
import { Provider } from '.';

export const Unleash: Provider = {
  name: 'Unleash',
  logo: UnleashSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/unleash',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/unleash',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/unleash-web',
      category: ['Client'],
    },
    {
      technology: 'Angular',
      parentTechnology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/blob/main/libs/providers/unleash-web/README.md#angular-framework',
      category: ['Client'],
    },
    {
      technology: 'React',
      parentTechnology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/blob/main/libs/providers/unleash-web/README.md#react-framework',
      category: ['Client'],
    },
    {
      technology: '.NET',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Providers.Unleash',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-node-provider',
      category: ['Server'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-android-provider',
      category: ['Client'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-php-provider',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-python-provider',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-ruby-provider',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-rust-provider',
      category: ['Server'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/Unleash/unleash-openfeature-swift-provider',
      category: ['Client'],
    },
  ],
};
