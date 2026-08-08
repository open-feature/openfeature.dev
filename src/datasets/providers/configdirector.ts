import ConfigDirectorSvg from '@site/static/img/configdirector-no-fill.svg';
import type { Provider } from '.';

const jsSdk = {
  technology: 'JavaScript' as const,
  vendorOfficial: true,
};

export const ConfigDirector: Provider = {
  name: 'ConfigDirector',
  logo: ConfigDirectorSvg,
  technologies: [
    {
      ...jsSdk,
      href: 'https://docs.configdirector.com/sdks/browser/openfeature-web',
      category: ['Client'],
    },
    {
      ...jsSdk,
      href: 'https://docs.configdirector.com/sdks/server/openfeature-node',
      category: ['Server'],
    },
  ],
};
