import type { ComponentType, SVGProps } from 'react';

export type EcosystemElement = {
  vendor?: string;
  href: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  allTechnologies: Technology[];
  technology: Technology;
  parentTechnology?: Technology;
  type: Type;
  vendorOfficial: boolean;
  category: Category[];
};

export type Technology =
  | 'JavaScript'
  | 'Java'
  | 'Go'
  | 'PHP'
  | '.NET'
  | 'Kotlin'
  | 'Python'
  | 'Swift'
  | 'Dart'
  | 'Rust'
  | 'Ruby'
  | 'React'
  | 'Angular'
  | 'Rust'
  | 'NestJS'
  | 'Next.js'
  | 'SvelteKit';

export type Category = 'Server' | 'Client';
export type Type = 'Hook' | 'Provider' | 'SDK' | 'OFREP API' | 'Integration';

export type SdkCompatibility = {
  /**
   * The name of the SDK
   *
   * @example Java
   */
  name: string;
  /**
   * The path in the docs to the SDK
   *
   * @example /docs/reference/sdks/server/java
   */
  path: string;
  /**
   * The type of SDK based on the static and dynamic paradigms
   *
   * @example server
   */
  category: Category;
  spec: {
    /**
     * The version of the spec the SDK is compliant with
     *
     * @example v0.7.0
     */
    version: string;
    /**
     * The URL to the related spec release
     *
     * @example https://github.com/open-feature/spec/releases/tag/v0.7.0
     */
    href: string;
  };
  release: {
    /**
     * The version of the SDK package, library, or artifact
     *
     * @example 1.7.0
     */
    version: string;
    /**
     * The URL to the released SDK release
     *
     * @example https://github.com/open-feature/java-sdk/releases/tag/v1.7.0
     */
    href: string;
    /**
     * The stability of the SDK based on the latest released version. Sub-1.0
     * SDKs are considered unstable.
     *
     * @example true
     */
    stable: boolean;
  };
  features: {
    [key: string]: {
      /**
       * The status of the feature represented as an emoji.
       *
       * @example ✅
       */
      status: string;
      /**
       * The path to the SDK doc with an anchor to the specific feature.
       *
       * @example /docs/reference/sdks/server/java#providers
       */
      path: string;
    };
  };
};
