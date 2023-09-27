import FlipperNoFillSvg from '@site/static/img/flipper-no-fill.svg';
import { Provider } from '.';

export const Flipper: Provider = {
  name: 'Flipper',
  logo: FlipperNoFillSvg,
  technologies: [
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://github.com/flippercloud/flipper',
      category: ['Server'],
    },
  ],
};
