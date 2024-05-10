import EnvVarSvg from '@site/static/img/env-var-no-fill.svg';
import { Provider } from '.';

export const EnvVar: Provider = {
  name: 'Environment Variable ',
  logo: EnvVarSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/env-var',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/from-env',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/env-var',
      category: ['Server'],
    },
  ],
};
