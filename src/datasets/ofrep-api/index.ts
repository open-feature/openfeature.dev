import type { ComponentType, SVGProps } from 'react';
import { DevCycle } from './devcycle';
import { EcosystemElement } from '../types';
import { Goff } from './goff';
import { Flipt } from './flipt';
import { Flagd } from './flagd';
import { ConfigCat } from './configcat';
import { FFlags } from './fflags';
export type OFREPElement = Omit<EcosystemElement, 'allTechnologies' | 'technology' | 'category'>;

export const ECOSYSTEM_OFREP_APIS: OFREPElement[] = [DevCycle, Flipt, Goff, Flagd, ConfigCat, FFlags]
  .map(
    (api): OFREPElement => ({
      vendor: api.name,
      title: `${api.name} OFREP API`,
      description:
        typeof api.description === 'string' ? api.description : createDefaultDescription(api.name, api.vendorOfficial),
      type: 'OFREP API',
      logo: api.logo,
      href: api.href,
      vendorOfficial: api.vendorOfficial,
    }),
  )
  .flat();

function createDefaultDescription(vendor: string, official: boolean): string {
  return official ? `The official ${vendor} OFREP API` : `A community-maintained ${vendor} OFREP API`;
}

export type OFREP_API = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  description?: string;
  href: string;
  vendorOfficial: boolean;
};
