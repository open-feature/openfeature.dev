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
import { Flippter } from './flipper';
import { Category, EcosystemElement, Technology } from '..';

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
  Flipper,
]
  .map((provider) => {
    return provider.technologies.map(({ category, href, technology, vendorOfficial }): EcosystemElement => {
      return {
        vendor: provider.name,
        title: `${provider.name} Provider`,
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
