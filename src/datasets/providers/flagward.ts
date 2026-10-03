import FlagwardSvg from '@site/static/img/flagward-no-fill.svg';
import { Provider } from '.';

export const Flagward: Provider = {
  name: 'Flagward',
  logo: FlagwardSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.flagward.com/sdks/openfeature',
      category: ['Client'],
    },
  ],
};
