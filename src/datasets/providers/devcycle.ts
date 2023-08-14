import DevCycleSvg from '@site/static/img/devcycle-no-fill.svg';
import { Provider } from '.';

export const DevCycle: Provider = {
  name: 'DevCycle',
  logo: DevCycleSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@devcycle/openfeature-nodejs-provider',
      category: ['Server'],
    },
  ],
};
