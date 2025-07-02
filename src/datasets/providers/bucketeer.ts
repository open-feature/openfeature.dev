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
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://github.com/bucketeer-io/openfeature-kotlin-client-sdk',
      category: ['Client'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@bucketeer/openfeature-js-client-sdk',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/bucketeer-io/openfeature-go-server-sdk',
      category: ['Server'],
    },
  ],
};
