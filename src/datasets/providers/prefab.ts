import PrefabSvg from '@site/static/img/prefab-no-fill.svg';
import { Provider } from '.';

export const Prefab: Provider = {
  name: 'Prefab',
  logo: PrefabSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/prefab',
      category: ['Server'],
    },
  ],
};

