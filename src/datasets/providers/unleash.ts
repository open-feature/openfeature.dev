import UnleashSvg from '@site/static/img/unleash-no-fill.svg';
import { Provider } from '.';

export const Unleash: Provider = {
  name: 'Unleash',
  logo: UnleashSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/unleash',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/unleash',
      category: ['Server'],
    },
  ],
};
