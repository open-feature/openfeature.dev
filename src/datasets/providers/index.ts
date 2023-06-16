import type { ComponentType, SVGProps } from 'react';

import { CloudBees } from './cloudbees';
import { ConfigCat } from './configcat';
import { DevCycle } from './devcycle';
import { Flagd } from './flagd';
import { Flagsmith } from './flagsmith';
import { Flipt } from './flipt';
import { Goff } from './goff';
import { LaunchDarkly } from './launchdarkly';
import { PostHog } from './posthog';
import { Split } from './split';
import { EcosystemElement, Technology } from '..';

export const PROVIDERS: EcosystemElement[] = [
  CloudBees,
  ConfigCat,
  DevCycle,
  Flagd,
  Flagsmith,
  Flipt,
  Goff,
  LaunchDarkly,
  PostHog,
  Split,
]
  .map((i) => {
    return Object.entries(i.technologies).map(([technology, { vendorOfficial, href }]) => {
      return {
        vendor: i.name,
        title: `${i.name} Provider`,
        description:
          !i.description
            ? createDefaultDescription(i.name, vendorOfficial)
            : typeof i.description === 'string'
            ? i.description
            : i.description(vendorOfficial),
        type: 'Provider',
        logo: i.logo,
        href,
        technology,
        vendorOfficial,
      };
    });
  })
  .flat();

function createDefaultDescription(vendor: string, official: boolean): string {
  return official
    ? `The official ${vendor} provider for OpenFeature`
    : `A community-maintained ${vendor} provider for OpenFeature`;
}

export type Provider = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  technologies: Partial<Record<Technology, { vendorOfficial: boolean; href: string }>>;
  description?: string | ((vendorSupported: boolean) => string);
};
