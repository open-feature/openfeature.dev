import SplitSvg from '@site/static/img/split-no-fill.svg';
import { Provider } from '.';

export const Split: Provider = {
  name: 'Split',
  logo: SplitSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-js',
      category: ['Server-side'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-g',
      category: ['Server-side'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-java',
      category: ['Server-side'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-dotnet',
      category: ['Server-side'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/Split',
      category: ['Server-side'],
    },
  ],
};
