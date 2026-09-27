import TogulSvg from '@site/static/img/togul-no-fill.svg';
import { Provider } from '.';

export const Togul: Provider = {
  name: 'Togul',
  logo: TogulSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/togulapp/togul-js#openfeature',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/togulapp/togul-go#openfeature',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/togulapp/togul-python#openfeature',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://github.com/togulapp/togul-ruby#openfeature',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://github.com/togulapp/togul-php#openfeature',
      category: ['Server'],
    },
  ],
};
