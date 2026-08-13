import QuonfigSvg from '@site/static/img/quonfig-no-fill.svg';

import { Provider } from '.';

export const Quonfig: Provider = {
  name: 'Quonfig',
  logo: QuonfigSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/quonfig/openfeature-go',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/quonfig/openfeature-node',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/quonfig/openfeature-web',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/quonfig/openfeature-python',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://github.com/quonfig/openfeature-ruby',
      category: ['Server'],
    },
  ],
};
