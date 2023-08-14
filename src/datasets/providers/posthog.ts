import PostHogSvg from '@site/static/img/post-hog-no-fill.svg';
import { Provider } from '.';

export const PostHog: Provider = {
  name: 'PostHog',
  logo: PostHogSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://www.npmjs.com/package/@tapico/node-openfeature-posthog',
      category: ['Server'],
    },
  ],
};
