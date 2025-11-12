import type { ComponentType, SVGProps } from 'react';

import KameleoonSvg from '@site/static/img/vendors/kameleoon.svg';
import DevCycleSvg from '@site/static/img/vendors/devcycle.svg';
import FliptSvg from '@site/static/img/vendors/flipt.svg';
import FlagsmithSvg from '@site/static/img/vendors/flagsmith.svg';
import HarnessSvg from '@site/static/img/vendors/harness.svg';
import LaunchDarklySvg from '@site/static/img/vendors/launchdarkly.svg';
import TgglSvg from '@site/static/img/vendors/tggl.svg';
import GoffSvg from '@site/static/img/vendors/gofeatureflag.svg';
import ConfigCatSvg from '@site/static/img/vendors/configcat.svg';
import VwoSvg from '@site/static/img/vendors/vwo.svg';

type CommercialSupportType = {
  name: string;
  href: string;
  svg?: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Companies that provide commercial support for OpenFeature should be
 * added to this list alphabetically by company name. The extent of the
 * support provided is the responsibility of each company to define.
 *
 * The minimum requirements for adding a company to this list are:
 *  - At least one supported provider listed in the OpenFeature ecosystem
 *  - Publicly available mention of OpenFeature support on the company's website or documentation
 */
export const CommercialSupportList: CommercialSupportType[] = [
  {
    name: 'ConfigCat',
    href: 'https://configcat.com/docs/sdk-reference/openfeature/overview',
    svg: ConfigCatSvg,
  },
  {
    name: 'DevCycle',
    href: 'https://docs.devcycle.com/integrations/openfeature',
    svg: DevCycleSvg,
  },
  {
    name: 'Flagsmith',
    href: 'https://www.flagsmith.com/openfeature',
    svg: FlagsmithSvg,
  },
  {
    name: 'Flipt',
    href: 'https://docs.flipt.io/integration/openfeature',
    svg: FliptSvg,
  },
  {
    name: 'GO Feature Flag',
    href: 'https://gofeatureflag.org/docs/openfeature_sdk/sdk',
    svg: GoffSvg,
  },
  {
    name: 'Harness Feature Management & Experimentation',
    href: 'https://developer.harness.io/docs/feature-management-experimentation/sdks-and-infrastructure/openfeature',
    svg: HarnessSvg,
  },
  {
    name: 'Kameleoon',
    href: 'https://developers.kameleoon.com/feature-management-and-experimentation/open-feature-providers/',
    svg: KameleoonSvg,
  },
  {
    name: 'LaunchDarkly',
    href: 'https://docs.launchdarkly.com/sdk/openfeature/',
    svg: LaunchDarklySvg,
  },
  {
    name: 'Tggl',
    href: 'https://tggl.io/developers/sdks/open-feature',
    svg: TgglSvg,
  },
  {
    name: 'VWO',
    href: 'https://developers.vwo.com/v2/docs/openfeature-providers',
    svg: VwoSvg,
  },
].sort((a, b) => a.name.localeCompare(b.name));
