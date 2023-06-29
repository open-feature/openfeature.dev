import CloudBeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import { Provider } from '.';

export const CloudBees: Provider = {
  name: 'CloudBees',
  logo: CloudBeesSvg,
  technologies: {
    JavaScript: {
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-node',
    },
    Go: {
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-go',
    },
    Java: {
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-java',
    },
    ['.NET']: {
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-dotnet',
    },
    PHP: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/CloudBees',
    },
  },
};
