import ReflagSvg from '@site/static/img/reflag-no-fill.svg';

import { Provider } from '.';

export const Reflag: Provider = {
  name: 'Reflag',
  logo: ReflagSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/reflagcom/javascript/tree/main/packages/openfeature-node-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/reflagcom/javascript/tree/main/packages/openfeature-browser-provider',
      category: ['Client'],
    },
  ],
};
