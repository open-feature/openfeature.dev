import RollgateSvg from '@site/static/img/rollgate.svg';
import { Provider } from '.';

export const Rollgate: Provider = {
  name: 'Rollgate',
  logo: RollgateSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/rollgate/sdks/tree/main/packages/openfeature-server-provider',
      category: ['Server'],
    },
  ],
};
