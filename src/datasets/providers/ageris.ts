import AgerisSvg from '@site/static/img/ageris-no-fill.svg';
import { Provider } from '.';

export const Ageris: Provider = {
  name: 'Ageris',
  logo: AgerisSvg,
  technologies: [
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/lichtsinn/ageris#using-ageris-through-openfeature',
      category: ['Server'],
    },
  ],
};
