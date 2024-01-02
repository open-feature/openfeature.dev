import type { ComponentType, SVGProps } from 'react';

import { CloudBees } from './cloudbees';
import { ConfigCat } from './configcat';
import { DevCycle } from './devcycle';
import { Flagd } from './flagd';
import { Flagsmith } from './flagsmith';
import { Flipt } from './flipt';
import { Goff } from './goff';
import { Harness } from './harness';
import { LaunchDarkly } from './launchdarkly';
import { PostHog } from './posthog';
import { Split } from './split';
import { Unleash } from './unleash';
import { Category, EcosystemElement, Technology } from '../types';

export const ECOSYSTEM_PROVIDERS: EcosystemElement[] = [
  CloudBees,
  ConfigCat,
  DevCycle,
  Flagd,
  Flagsmith,
  Flipt,
  Goff,
  Harness,
  LaunchDarkly,
  PostHog,
  Split,
  Unleash,
]
  .map((provider) => {
    return provider.technologies.map(({ category, href, technology, vendorOfficial }): EcosystemElement => {
      return {
        vendor: provider.name,
        title: `${provider.name} ${technology} ${category} Provider`,
        description: !provider.description
          ? createDefaultDescription(provider.name, vendorOfficial)
          : typeof provider.description === 'string'
          ? provider.description
          : provider.description(vendorOfficial),
        type: 'Provider',
        logo: provider.logo,
        href,
        technology,
        vendorOfficial,
        category,
      };
    });
  })
  .flat();


export const FAVOURITE_PROVIDERS: { vendor: string; logo: ComponentType<SVGProps<SVGSVGElement>>; }[] = [
  CloudBees,
  Split,
  Flipt,
  Goff,
  Flagsmith,
  LaunchDarkly,
  Flagd,
  DevCycle,
  Unleash,
  Harness,
].map((provider) => ({
  vendor: provider.name,
  logo: provider.logo,
}));

function createDefaultDescription(vendor: string, official: boolean): string {
  return official
    ? `The official ${vendor} provider for OpenFeature`
    : `A community-maintained ${vendor} provider for OpenFeature`;
}

export type Provider = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  technologies: Array<{ technology: Technology; vendorOfficial: boolean; href: string; category: Category[] }>;
  description?: string | ((vendorSupported: boolean) => string);
};
