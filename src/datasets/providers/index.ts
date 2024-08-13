import type { ComponentType, SVGProps } from 'react';

import { CloudBees } from './cloudbees';
import { ConfigCat } from './configcat';
import { DevCycle } from './devcycle';
import { EnvVar } from './env-var';
import { Flagd } from './flagd';
import { Flagsmith } from './flagsmith';
import { Flipt } from './flipt';
import { Goff } from './goff';
import { Harness } from './harness';
import { Kameleoon } from './kameleoon';
import { LaunchDarkly } from './launchdarkly';
import { PostHog } from './posthog';
import { Split } from './split';
import { Unleash } from './unleash';
import { Statsig } from './statsig';
import { FeatBit } from './featbit';
import { UserDefaults } from './user-defaults';
import { GrowthBook } from './growthbook';
import { Category, EcosystemElement, Technology } from '../types';
import { MultiProvider } from './multi-provider';
import { Hypertune } from './hypertune';

export const PROVIDERS: Provider[] = [
  CloudBees,
  ConfigCat,
  DevCycle,
  EnvVar,
  FeatBit,
  Flagd,
  Flagsmith,
  Flipt,
  Goff,
  Harness,
  Hypertune,
  Kameleoon,
  LaunchDarkly,
  PostHog,
  Split,
  Statsig,
  Unleash,
  UserDefaults,
  GrowthBook,
  MultiProvider,
];

export const ECOSYSTEM_PROVIDERS: EcosystemElement[] = PROVIDERS.map((provider) => {
  return provider.technologies.map(({ category, href, technology, vendorOfficial }): EcosystemElement => {
    return {
      vendor: provider.name,
      title:
        technology === 'JavaScript'
          ? `${provider.name} ${technology} ${category[0] === 'Client' ? 'Web' : 'Node.js'} Provider`
          : `${provider.name} ${technology} ${category} Provider`,
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
}).flat();

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
  excludeFromLandingPage?: boolean;
};
