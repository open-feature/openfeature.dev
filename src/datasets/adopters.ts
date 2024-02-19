import EbaySvg from '@site/static/img/adopters/EBay_logo.svg';
import DynatraceSvg from '@site/static/img/adopters/Dynatrace_Logo_color_positive_horizontal.svg';
import { ComponentType, SVGProps } from 'react';

type AdoptersType = {
    name: string;
    href: string;
    svg?: ComponentType<SVGProps<SVGSVGElement>>;
    image?: string;
};

export const Adopters: AdoptersType[]  = [
    {
    name: 'ebay',
    href: 'http://ebay.com/',
    svg: EbaySvg,
    },
    {
        name: 'Dynatrace',
        href: 'http://dynatrace.com/',
        svg: DynatraceSvg,
    },
];