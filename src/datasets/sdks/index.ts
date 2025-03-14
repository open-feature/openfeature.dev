import { Java } from './java';
import { Nodejs } from './nodejs';
import { Dotnet } from './dotnet';
import { Go } from './go';
import { Web } from './web';
import { Category, Technology } from '../types';
import { Kotlin } from './kotlin';
import { Python } from './python';
import { PHP } from './php';
import { Swift } from './swift';
import { React } from './react';
import { Nestjs } from './nestjs';
import { Ruby } from './ruby';
import { Angular } from './angular';
import { Rust } from './rust';
import { NestjsFlagsSDK } from './nextjs-flags-sdk';

export const SDKS = [
  Java,
  Nodejs,
  Nestjs,
  Dotnet,
  Go,
  Python,
  PHP,
  Web,
  React,
  Kotlin,
  Swift,
  Ruby,
  Angular,
  Rust,
  NestjsFlagsSDK,
];

export type SDK = {
  /**
   * The name of the technology used for the SDK.
   */
  name: string;

  /**
   * The description of the SDK to override the default.
   */
  description?: string;
  /**
   * The name used for the generated file.
   *
   * @defaults name.toLowerCase()
   */
  filename?: string;
  /**
   * The slug used to identify the page in Docusaurus.
   *
   * @url https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
   */
  slug?: string;
  /**
   * The id used to identify the page in Docusaurus.
   *
   * @url https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
   */
  id?: string;
  /**
   * The file extension used for the generated file.
   *
   * @default mdx
   */
  fileExtension?: string;

  category: Category;
  /**
   * The name of the SDK repo.
   */
  repo?: string;
  /**
   * The git branch that should be used when fetching the readme.
   */
  branch?: string;
  /**
   * The folder where the README can be found.
   */
  folder?: string;
  /**
   * A key that matches an SVG logo found the LogoMap.
   *
   * @example c-sharp-no-fill.svg
   */
  logoKey: string;
  /**
   * Friendly name of the technology of the SDK.
   */
  technology: Technology;
  /**
   * The parent technology of the SDK. For example, JavaScript is the parent technology of React and Angular.
   */
  parentTechnology?: Technology;
  /**
   * Determines if the technology list should skip including the parent technology providers.
   */
  skipParentTechnologyProviders?: boolean;
  /**
   * Link to the SDK documentation
   */
  href: string;
  /**
   * Determines if the SDK should be included in the support matrix.
   *
   * @default true
   */
  includeInSupportMatrix?: boolean;
};
