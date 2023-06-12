import type { ComponentType, SVGProps } from 'react';
import { OpenTelemetry } from './opentelemetry';
import { Validation } from './validation';
import { Datadog } from './datadog';
import { EcosystemElement, Technology } from '..';

export const HOOKS: EcosystemElement[] = [OpenTelemetry, Validation, Datadog]
  .map((i) => {
    return Object.entries(i.technologies).map(([technology, { vendorOfficial, href }]) => {
      return {
        title: `${i.name} Hook`,
        description: typeof i.description === 'string' ? i.description : i.description(vendorOfficial),
        type: 'Hook',
        logo: i.logo,
        href,
        technology,
        vendorOfficial,
      };
    });
  })
  .flat();

export type Hook = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  technologies: Partial<Record<Technology, { vendorOfficial: boolean; href: string }>>;
  description: string | ((vendorSupported: boolean) => string);
};
