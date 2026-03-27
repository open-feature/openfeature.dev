import { SDKS } from '.';
import compatibilityData from './sdk-compatibility.json';
import { EcosystemElement, SdkCompatibility } from '../types';

import CSharpSvg from '@site/static/img/c-sharp-no-fill.svg';
import GoSvg from '@site/static/img/go-no-fill.svg';
import JavaSvg from '@site/static/img/java-no-fill.svg';
import NodejsSvg from '@site/static/img/nodejs-no-fill.svg';
import ReactSvg from '@site/static/img/react-no-fill.svg';
import NestjsSvg from '@site/static/img/nestjs-no-fill.svg';
import WebSvg from '@site/static/img/web-no-fill.svg';
import KotlinSvg from '@site/static/img/kotlin-no-fill.svg';
import PythonSvg from '@site/static/img/python-no-fill.svg';
import PhpSvg from '@site/static/img/php-no-fill.svg';
import IosSvg from '@site/static/img/ios-no-fill.svg';
import RubySvg from '@site/static/img/ruby-no-fill.svg';
import AngularSvg from '@site/static/img/angular-no-fill.svg';
import DartSvg from '@site/static/img/dart-no-fill.svg';
import RustSvg from '@site/static/img/rust-no-fill.svg';
import FlagsSDKSvg from '@site/static/img/flags-sdk-no-fill.svg';

const LogoMap: Record<string, EcosystemElement['logo']> = {
  'c-sharp-no-fill.svg': CSharpSvg,
  'go-no-fill.svg': GoSvg,
  'java-no-fill.svg': JavaSvg,
  'nodejs-no-fill.svg': NodejsSvg,
  'web-no-fill.svg': WebSvg,
  'react-no-fill.svg': ReactSvg,
  'nestjs-no-fill.svg': NestjsSvg,
  'kotlin-no-fill.svg': KotlinSvg,
  'python-no-fill.svg': PythonSvg,
  'php-no-fill.svg': PhpSvg,
  'ios-no-fill.svg': IosSvg,
  'ruby-no-fill.svg': RubySvg,
  'angular-no-fill.svg': AngularSvg,
  'dart-no-fill.svg': DartSvg,
  'rust-no-fill.svg': RustSvg,
  'flags-sdk-no-fill.svg': FlagsSDKSvg,
};

const sdkCompatibility = compatibilityData as SdkCompatibility[];

function compareVersions(a: string, b: string) {
  const aParts = a.split('.').map(Number);
  const bParts = b.split('.').map(Number);
  const maxLength = Math.max(aParts.length, bParts.length);

  for (let index = 0; index < maxLength; index++) {
    const aPart = aParts[index] ?? 0;
    const bPart = bParts[index] ?? 0;

    if (aPart !== bPart) {
      return aPart - bPart;
    }
  }

  return 0;
}

const latestSpecVersion = sdkCompatibility.reduce(
  (latest, sdk) => (compareVersions(sdk.spec.version, latest) > 0 ? sdk.spec.version : latest),
  '0.0.0',
);

const sdkCompatibilityByPath = new Map(
  sdkCompatibility.map((sdk) => [
    sdk.path,
    {
      release: {
        version: sdk.release.version,
        href: sdk.release.href,
        stable: sdk.release.stable,
      },
      spec: {
        version: sdk.spec.version,
        href: sdk.spec.href,
        latest: sdk.spec.version === latestSpecVersion,
      },
    },
  ]),
);

function getInheritedCompatibilityPath(href: string, repo?: string) {
  if (repo !== 'js-sdk') {
    return undefined;
  }

  if (href.startsWith('/docs/reference/sdks/server/javascript/')) {
    return '/docs/reference/sdks/server/javascript';
  }

  if (href.startsWith('/docs/reference/sdks/client/web/')) {
    return '/docs/reference/sdks/client/web';
  }

  return undefined;
}

export const ECOSYSTEM_SDKS: EcosystemElement[] = SDKS.map((sdk) => {
  const logo = LogoMap[sdk.logoKey];
  const sdkVersions =
    sdkCompatibilityByPath.get(sdk.href) ?? sdkCompatibilityByPath.get(getInheritedCompatibilityPath(sdk.href, sdk.repo));

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
    sdkVersions,
  };
});
