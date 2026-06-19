import FlagLintSvg from '@site/static/img/flaglint-no-fill.svg';
import { Integration } from '.';

export const FlagLint: Integration = {
  name: 'FlagLint',
  logo: FlagLintSvg,
  description:
    'Open-source CLI that audits LaunchDarkly Node.js SDK usage and generates safe OpenFeature migration plans.',
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/flaglint/flaglint',
      category: ['Server'],
    },
  ],
};
