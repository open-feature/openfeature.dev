import FlagtideSvg from '@site/static/img/flagtide-no-fill.svg';
import { Provider } from '.';

export const Flagtide: Provider = {
  name: 'flagtide',
  logo: FlagtideSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/adiyy2001/flagtide/tree/main/libs/openfeature-web#readme',
      category: ['Client'],
    },
  ],
};
