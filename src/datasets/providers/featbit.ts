import FeatBitSvg from '@site/static/img/featbit-no-fill.svg';
import { Provider } from '.';

export const FeatBit: Provider = {
  name: 'FeatBit',
  logo: FeatBitSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/featbit/openfeature-provider-golang-server',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/featbit/featbit-openfeature-provider-java-server',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/featbit/openfeature-provider-dotnet-server',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/featbit/openfeature-provider-node-server',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/featbit/openfeature-provider-js-client',
      category: ['Client'],
    },
  ],
};
