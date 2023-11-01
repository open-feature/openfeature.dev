import type { ComponentType, SVGProps } from 'react';
import { OpenTelemetry } from './opentelemetry';
import { Validation } from './validation';
import { Datadog } from './datadog';
import { Category, EcosystemElement, Technology } from '../types';

export const ECOSYSTEM_HOOKS: EcosystemElement[] = [OpenTelemetry, Validation, Datadog]
  .map((hook) => {
    return hook.technologies.map(({ vendorOfficial, technology, href, category }): EcosystemElement => {
      return {
        title: `${hook.name} Hook`,
        description: typeof hook.description === 'string' ? hook.description : hook.description(vendorOfficial),
        type: 'Hook',
        logo: hook.logo,
        href,
        technology,
        vendorOfficial,
        category,
      };
    });
  })
  .flat();

export type Hook = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  technologies: Array<{ technology: Technology; vendorOfficial: boolean; href: string; category: Category[] }>;
  description: string | ((vendorSupported: boolean) => string);
};
