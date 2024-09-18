import { IconDefinition as BrandsIconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition as FreeIconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

type ResourcesType = {
  title: string;
  description?: string;
  href: string;
  iconDefinition?: BrandsIconDefinition | FreeIconDefinition;
};

export const TrainingResources: ResourcesType[] = [
  {
    title: 'OpenFeature Fundamentals',
    description: 'An introduction to then core concepts of OpenFeature',
    href: 'https://www.youtube.com/watch?v=heQ83k15ZE4&list=PLiQt8D1ofl8zs2zoiMNI8WRdNQ8GUy84I',
    iconDefinition: faYoutube,
  },
];
