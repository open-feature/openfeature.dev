import KameleoonSvg from '@site/static/img/kameleoon-no-fill.svg';
import { Provider } from '.';

export const Kameleoon: Provider = {
  name: 'Kameleoon',
  logo: KameleoonSvg,
  technologies: [
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/Kameleoon/openfeature-dotnet',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/Kameleoon/openfeature-java',
      category: ['Server'],
    },
  ],
};
