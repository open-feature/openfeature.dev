import DevCycleSvg from '@site/static/img/devcycle-no-fill.svg';
import { Provider } from '.';

export const DevCycle: Provider = {
  name: 'DevCycle',
  logo: DevCycleSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@devcycle/openfeature-nodejs-provider',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/DevCycleHQ/java-server-sdk/#openfeature-support',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/DevCycleHQ/go-server-sdk#openfeature-support',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://docs.devcycle.com/sdk/server-side-sdks/dotnet/dotnet-openfeature',
      category: ['Server'],
    },
  ],
};
