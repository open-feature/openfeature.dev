import PostHogSvg from '@site/static/img/post-hog-no-fill.svg';
import { Provider } from '.';

export const PostHog: Provider = {
  name: 'PostHog',
  logo: PostHogSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/PostHog/posthog-js/tree/main/packages/openfeature-node-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/PostHog/posthog-js/tree/main/packages/openfeature-web-provider',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/PostHog/posthog-python/tree/main/openfeature-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://www.npmjs.com/package/@tapico/node-openfeature-posthog',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/dhaus67/openfeature-posthog-go',
      category: ['Server'],
    },
  ],
};
