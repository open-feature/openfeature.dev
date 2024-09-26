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
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/Kameleoon/openfeature-python',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/Kameleoon/openfeature-go',
      category: ['Server'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://github.com/Kameleoon/openfeature-android',
      category: ['Client'],
    },
  ],
};
