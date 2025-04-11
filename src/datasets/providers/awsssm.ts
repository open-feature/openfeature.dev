import { Provider } from '.';
import AwsSvg from '@site/static/img/aws-no-fill.svg';

export const AwsSSM: Provider = {
  name: 'AWS SSM',
  logo: AwsSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/aws-ssm',
      category: ['Server'],
    },
  ],
};
