import HyphenNoFillSvg from '@site/static/img/hyphen-no-fill.svg';
import { Provider } from '.';

export const Hyphen: Provider = {
  name: 'Hyphen AI',
  logo: HyphenNoFillSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/Hyphen/openfeature-provider-javascript-server',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/Hyphen/openfeature-provider-javascript-web',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/Hyphen/openfeature-provider-go',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/Hyphen/openfeature-provider-java',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/Hyphen/openfeature-provider-dotnet',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/Hyphen/openfeature-provider-python',
      category: ['Server'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/Hyphen/hyphen-openfeature-swift',
      category: ['Client'],
    },
  ],
};
