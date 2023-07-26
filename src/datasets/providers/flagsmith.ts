import FlagsmithSvg from '@site/static/img/flagsmith-no-fill.svg';
import { Provider } from '.';

export const Flagsmith: Provider = {
  name: 'Flagsmith',
  logo: FlagsmithSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagsmith',
      category: ['Server-side'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagsmith',
      category: ['Server-side'],
    },
  ],
};
