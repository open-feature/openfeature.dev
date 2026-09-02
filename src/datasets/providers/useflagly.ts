import UseFlaglySvg from '@site/static/img/useflagly-no-fill.svg';

import { Provider } from '.';

export const UseFlagly: Provider = {
  name: 'UseFlagly',
  logo: UseFlaglySvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@useflagly/openfeature-provider',
      category: ['Server'],
    },
  ],
};
