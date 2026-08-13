import OctopusDeploySvg from '@site/static/img/octopus-deploy-no-fill.svg';

import { Provider } from '.';

export const OctopusDeploy: Provider = {
  name: 'Octopus Deploy',
  logo: OctopusDeploySvg,
  technologies: [
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/OctopusDeploy/openfeature-provider-dotnet',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/OctopusDeploy/openfeature-provider-java',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/OctopusDeploy/openfeature-provider-ts-web',
      category: ['Client'],
    },
  ],
};
