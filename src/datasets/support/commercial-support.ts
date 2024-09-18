import type { ComponentType, SVGProps } from 'react';

import DevCycleSvg from '@site/static/img/vendors/devcycle.svg';
import FliptSvg from '@site/static/img/vendors/flipt.svg';
import FlagsmithSvg from '@site/static/img/vendors/flagsmith.svg';
import LaunchDarklySvg from '@site/static/img/vendors/launchdarkly.svg';

type CommercialSupportType = {
  name: string;
  href: string;
  svg?: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Companies that provide commercial support for OpenFeature should be
 * added to this list alphabetically by company name. The extent of the
 * support provided is the responsibility of each company.
 *
 * The minimum requirements for adding a company to this list are:
 *  - At least one supported provider listed in the OpenFeature ecosystem
 *  - Publicly available mention of OpenFeature support on the company's website or documentation
 */
export const CommercialSupportList: CommercialSupportType[] = [
  {
    name: 'DevCycle',
    href: 'https://devcycle.com/',
    svg: DevCycleSvg,
  },
  {
    name: 'Flagsmith',
    href: 'https://www.flagsmith.com/',
    svg: FlagsmithSvg,
  },
  {
    name: 'Flipt',
    href: 'https://www.flipt.io/',
    svg: FliptSvg,
  },
  {
    name: 'LaunchDarkly',
    href: 'https://launchdarkly.com/',
    svg: LaunchDarklySvg,
  },
].sort((a, b) => a.name.localeCompare(b.name));
