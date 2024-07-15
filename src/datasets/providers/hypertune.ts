import HypertuneSvg from '@site/static/img/hypertune-no-fill.svg';
import { Provider } from '.';

export const Hypertune: Provider = {
  name: 'Hypertune',
  logo: HypertuneSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@hypertune/openfeature-server-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@hypertune/openfeature-web-provider',
      category: ['Client'],
    },
  ],
};
