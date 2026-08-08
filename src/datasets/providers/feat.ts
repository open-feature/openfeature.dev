import FeatSvg from '@site/static/img/feat-no-fill.svg';
import { Provider } from '.';

export const Feat: Provider = {
  name: 'feat',
  logo: FeatSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/feathq/openfeature-web',
      category: ['Client'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/feathq/js-sdk',
      category: ['Server'],
    },
    {
      technology: 'Dart',
      vendorOfficial: true,
      href: 'https://github.com/feathq/openfeature-dart',
      category: ['Server'],
    },
  ],
};
