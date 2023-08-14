import CheckCircle from '@site/static/img/check-circle-no-fill.svg';
import { Hook } from '.';

export const Validation: Hook = {
  name: 'Validator',
  logo: CheckCircle,
  description: 'A hook that validates the result of a flag evaluation',
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/hooks/validator',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/hooks/Validators',
      category: ['Server'],
    },
  ],
};
