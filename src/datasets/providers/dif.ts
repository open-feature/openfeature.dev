import DifSvg from '@site/static/img/dif-no-fill.svg';
import { Provider } from '.';

export const Dif: Provider = {
  name: 'dif.sh',
  logo: DifSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@dif.sh/openfeature',
      category: ['Server'],
    },
  ],
};
