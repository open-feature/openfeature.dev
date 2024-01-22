import { SDKS } from '.';
import { EcosystemElement } from '../types';

import CSharpSvg from '@site/static/img/c-sharp-no-fill.svg';
import GoSvg from '@site/static/img/go-no-fill.svg';
import JavaSvg from '@site/static/img/java-no-fill.svg';
import NodejsSvg from '@site/static/img/nodejs-no-fill.svg';
import WebSvg from '@site/static/img/web-no-fill.svg';
import AndroidSvg from '@site/static/img/android-no-fill.svg';
import PythonSvg from '@site/static/img/python-no-fill.svg';
import PhpSvg from '@site/static/img/php-no-fill.svg';
import IosSvg from '@site/static/img/ios-no-fill.svg';

const LogoMap: Record<string, EcosystemElement['logo']> = {
  'c-sharp-no-fill.svg': CSharpSvg,
  'go-no-fill.svg': GoSvg,
  'java-no-fill.svg': JavaSvg,
  'nodejs-no-fill.svg': NodejsSvg,
  'web-no-fill.svg': WebSvg,
  'android-no-fill.svg': AndroidSvg,
  'python-no-fill.svg': PythonSvg,
  'php-no-fill.svg': PhpSvg,
  'ios-no-fill.svg': IosSvg,
};

export const ECOSYSTEM_SDKS: EcosystemElement[] = SDKS.map((sdk) => {
  const logo = LogoMap[sdk.logoKey];

  if (!logo) {
    throw new Error(`Unable to find a logo that matches the key ${sdk.logoKey}`);
  }

  return {
    title: `${sdk.name} SDK`,
    description: `The official OpenFeature SDK for ${sdk.name}`,
    category: [sdk.category],
    href: sdk.href,
    logo: logo,
    technology: sdk.technology,
    type: 'SDK',
    vendorOfficial: false,
  };
});
