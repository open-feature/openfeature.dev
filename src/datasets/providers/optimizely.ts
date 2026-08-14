import OptimizelySvg from '@site/static/img/optimizely-no-fill.svg';
import { Provider } from '.';

export const Optimizely: Provider = {
  name: 'Optimizely',
  logo: OptimizelySvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/optimizely',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/optimizely',
      category: ['Server'],
    },
  ],
};
