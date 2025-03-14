import { SDKS } from '.';
import { EcosystemElement } from '../types';

import CSharpSvg from '@site/static/img/c-sharp-no-fill.svg';
import GoSvg from '@site/static/img/go-no-fill.svg';
import JavaSvg from '@site/static/img/java-no-fill.svg';
import NodejsSvg from '@site/static/img/nodejs-no-fill.svg';
import ReactSvg from '@site/static/img/react-no-fill.svg';
import NestjsSvg from '@site/static/img/nestjs-no-fill.svg';
import WebSvg from '@site/static/img/web-no-fill.svg';
import AndroidSvg from '@site/static/img/android-no-fill.svg';
import PythonSvg from '@site/static/img/python-no-fill.svg';
import PhpSvg from '@site/static/img/php-no-fill.svg';
import IosSvg from '@site/static/img/ios-no-fill.svg';
import RubySvg from '@site/static/img/ruby-no-fill.svg';
import AngularSvg from '@site/static/img/angular-no-fill.svg';
import RustSvg from '@site/static/img/rust-no-fill.svg';
import NextjsSvg from '@site/static/img/nextjs-no-fill.svg';
import SveltekitSvg from '@site/static/img/svelte-no-fill.svg';
import FlagsSDKSvg from '@site/static/img/flags-sdk-no-fill.svg';

const LogoMap: Record<string, EcosystemElement['logo']> = {
  'c-sharp-no-fill.svg': CSharpSvg,
  'go-no-fill.svg': GoSvg,
  'java-no-fill.svg': JavaSvg,
  'nodejs-no-fill.svg': NodejsSvg,
  'web-no-fill.svg': WebSvg,
  'react-no-fill.svg': ReactSvg,
  'nestjs-no-fill.svg': NestjsSvg,
  'android-no-fill.svg': AndroidSvg,
  'python-no-fill.svg': PythonSvg,
  'php-no-fill.svg': PhpSvg,
  'ios-no-fill.svg': IosSvg,
  'ruby-no-fill.svg': RubySvg,
  'angular-no-fill.svg': AngularSvg,
  'rust-no-fill.svg': RustSvg,
  'nextjs-no-fill.svg': NextjsSvg,
  'svelte-no-fill.svg': SveltekitSvg,
  'flags-sdk-no-fill.svg': FlagsSDKSvg,
};

export const ECOSYSTEM_SDKS: EcosystemElement[] = SDKS.map((sdk) => {
  const logo = LogoMap[sdk.logoKey];

  if (!logo) {
    throw new Error(`Unable to find a logo that matches the key ${sdk.logoKey}`);
  }

  return {
    title: `${sdk.name} SDK`,
    description: sdk.description || `The official OpenFeature SDK for ${sdk.name}`,
    category: [sdk.category],
    href: sdk.href,
    logo: logo,
    allTechnologies: [sdk.technology, sdk.parentTechnology].filter(Boolean),
    technology: sdk.technology,
    parentTechnology: sdk.parentTechnology,
    type: 'SDK',
    vendorOfficial: false,
  };
});
