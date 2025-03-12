import BucketeerSvg from '@site/static/img/bucketeer-no-fill.svg';

import { Provider } from '.';

export const Bucketeer: Provider = {
  name: 'Bucketeer',
  logo: BucketeerSvg,
  technologies: [
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/bucketeer-io/openfeature-swift-client-sdk',
      category: ['Client'],
    },
  ],
};
