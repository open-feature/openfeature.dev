import DevCycleSvg from '@site/static/img/devcycle-no-fill.svg';
import { Provider } from '.';

export const DevCycle: Provider = {
  name: 'DevCycle',
  logo: DevCycleSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/node/node-openfeature',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/java/java-openfeature',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/go/go-openfeature',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/dotnet/dotnet-openfeature',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/client-side-sdks/javascript/javascript-openfeature',
      category: ['Client'],
    },
    {
      technology: 'React',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/client-side-sdks/react/react-openfeature',
      category: ['Client'],
    },
    {
      technology: 'Angular',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/client-side-sdks/angular/angular-install',
      category: ['Client'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/php/php-openfeature',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/python/python-openfeature',
      category: ['Server'],
    },
  ],
};
