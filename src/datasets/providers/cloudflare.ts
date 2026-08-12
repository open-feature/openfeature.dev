import CloudflareSvg from '@site/static/img/cloudflare-no-fill.svg';
import type { Provider } from '.';

export const Cloudflare: Provider = {
  name: 'Cloudflare Flagship',
  logo: CloudflareSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://developers.cloudflare.com/flagship/sdk/client-provider/',
      category: ['Client'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://developers.cloudflare.com/flagship/sdk/server-provider/',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://developers.cloudflare.com/flagship/sdk/go/',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://developers.cloudflare.com/flagship/sdk/python/',
      category: ['Server'],
    },
  ],
};
