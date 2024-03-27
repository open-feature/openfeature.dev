import StatsigNoFillSvg from '@site/static/img/statsig-no-fill.svg';
import { Provider } from '.';

export const Statsig: Provider = {
  name: 'Statsig',
  logo: StatsigNoFillSvg,
  technologies: [
    {
      technology: '.NET',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.Statsig',
      category: ['Server'],
    },
  ],
};
