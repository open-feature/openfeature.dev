import PendoSvg from '@site/static/img/pendo-no-fill.svg';
import { Provider } from '.';

export const Pendo: Provider = {
  name: 'Pendo',
  logo: PendoSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@pendo/openfeature-server-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@pendo/openfeature-web-provider',
      category: ['Client'],
    },
  ],
};
