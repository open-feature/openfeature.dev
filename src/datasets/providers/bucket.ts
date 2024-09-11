import BucketSvg from '@site/static/img/bucketco-no-fill.svg';

import { Provider } from '.';

export const Bucket: Provider = {
  name: 'Bucket',
  logo: BucketSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@bucketco/openfeature-node-provider',
      category: ['Server'],
    },
  ],
};
