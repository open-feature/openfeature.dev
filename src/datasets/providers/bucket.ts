import BucketSvg from '@site/static/img/bucketco-no-fill.svg';

import { Provider } from '.';

export const Bucket: Provider = {
  name: 'Bucket',
  logo: BucketSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/openfeature-node-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/openfeature-browser-provider',
      category: ['Client'],
    },
  ],
};
