import FliptSvg from '@site/static/img/flipt-no-fill.svg';
import { Provider } from '.';

export const Flipt: Provider = {
  name: 'Flipt',
  logo: FliptSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flipt',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flipt',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flipt-web',
      category: ['Client'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flipt',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/rust-sdk-contrib/tree/main/crates/flipt',
      category: ['Server'],
    },
        {
      technology: 'Python',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/python-sdk-contrib/tree/main/providers/openfeature-provider-flipt',
      category: ['Server'],
    },
  ],
};
