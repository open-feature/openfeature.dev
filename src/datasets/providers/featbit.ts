import FeatBitSvg from '@site/static/img/featbit-no-fill.svg';
import { Provider } from '.';

export const FeatBit: Provider = {
  name: 'FeatBit',
  logo: FeatBitSvg,
  technologies: [
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/featbit/featbit-openfeature-provider-java-server',
      category: ['Server'],
    },
  ],
};
