import ConfidenceSvg from '@site/static/img/confidence-no-fill.svg';

import { Provider } from '.';

export const Confidence: Provider = {
  name: 'Confidence by Spotify',
  logo: ConfidenceSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/spotify/confidence-sdk-js',
      category: ['Client','Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/spotify/confidence-sdk-java',
      category: ['Server'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://github.com/spotify/confidence-sdk-android',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/spotify/confidence-sdk-swift',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/spotify/confidence-sdk-python',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/spotify/confidence-sdk-go',
      category: ['Server'],
    },
  ],
};
