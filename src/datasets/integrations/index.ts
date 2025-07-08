import type { ComponentType, SVGProps } from 'react';
import { DropwizardOpenfeature } from './dropwizard-openfeature';
import { Category, EcosystemElement, Technology } from '../types';

export const ECOSYSTEM_INTEGRATONS: EcosystemElement[] = [DropwizardOpenfeature]
  .map((integration) => {
    return integration.technologies.map(({ vendorOfficial, technology, href, category }): EcosystemElement => {
      return {
        title: `${integration.name}`,
        description: integration.description,
        type: 'Integration',
        logo: integration.logo,
        href,
        allTechnologies: [technology],
        technology,
        vendorOfficial,
        category,
      };
    });
  })
  .flat();

export type Integration = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  technologies: Array<{ technology: Technology; vendorOfficial: boolean; href: string; category: Category[] }>;
  description: string;
};
