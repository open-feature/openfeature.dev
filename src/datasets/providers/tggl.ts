import TgglSvg from '@site/static/img/tggl-no-fill.svg';
import { Provider } from '.';

export const Tggl: Provider = {
  name: 'Tggl',
  logo: TgglSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://tggl.io/developers/sdks/open-feature/node',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://tggl.io/developers/sdks/open-feature/web',
      category: ['Client'],
    },
  ],
};
