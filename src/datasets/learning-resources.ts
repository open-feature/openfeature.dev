import { ComponentType, SVGProps } from 'react';
import { IconDefinition as BrandsIconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition as FreeIconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

type ResourcesType = {
    title: string;
    description?: string;
    href: string;
    svg?: ComponentType<SVGProps<SVGSVGElement>>;
    iconDefinition?: BrandsIconDefinition | FreeIconDefinition;
};

export const LearningResources: ResourcesType[]  = [
    {
    title: 'OpenFeature Basics and Core concepts',
    description: 'This youtube playlist covers the fundamental of openFeature',
    href: 'https://www.youtube.com/watch?v=heQ83k15ZE4&list=PLiQt8D1ofl8zs2zoiMNI8WRdNQ8GUy84I',
    iconDefinition: faYoutube,
    }
];