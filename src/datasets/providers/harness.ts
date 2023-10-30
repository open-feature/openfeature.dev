import HarnessSvg from '@site/static/img/Harness-no-fill.svg';
import { Provider } from '.';

export const Harness: Provider = {
  name: 'Harness',
  logo: HarnessSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/harness',
      category: ['Server'],
    },
  ],
};
