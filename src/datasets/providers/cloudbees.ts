import CloudBeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import { Provider } from '.';

export const CloudBees: Provider = {
  name: 'CloudBees',
  logo: CloudBeesSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-node',
      category: ['Server-side'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-go',
      category: ['Server-side'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/rollout/cloudbees-openfeature-provider-java',
      category: ['Server-side'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/CloudBees',
      category: ['Server-side'],
    },
  ],
};
