import StopWatch from '@site/static/img/stopwatch-no-fill.svg';
import { Hook } from '.';

export const Debounce: Hook = {
  name: 'Debounce',
  logo: StopWatch,
  description: 'Rate-limits or "debounces" hook executions',
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/hooks/debounce',
      category: ['Server', 'Client'],
    },
  ],
};
