import DropwizardSvg from '@site/static/img/dropwizard-no-fill.svg';
import { Integration } from '.';

export const DropwizardOpenfeature: Integration = {
  name: 'Dropwizard Openfeature',
  logo: DropwizardSvg,
  description: 'Dropwizard module for integrating with Openfeature.',
  technologies: [
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/sideshowcoder/dropwizard-openfeature',
      category: ['Server'],
    },
  ],
};
