import ConfigBeeSvg from '@site/static/img/configbee-no-fill.svg';

import { Provider } from '.';

export const ConfigBee: Provider = {
  name: 'ConfigBee',
  logo: ConfigBeeSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/configbee/cb-openfeature-provider-web',
      category: ['Client'],
    },
  ],
};
