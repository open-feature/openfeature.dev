import { Java } from './java';
import { Nodejs } from './nodejs';
import { Dotnet } from './dotnet';
import { Go } from './go';
import { Web } from './web';
import { Category, Technology } from '../types';
import { Kotlin } from './kotlin';
import { Python } from './python';

export const SDKS = [Java, Nodejs, Dotnet, Go, Python, Web, Kotlin];

export type SDK = {
  /**
   * The name of the technology used for the SDK.
   */
  name: string;
  /**
   * The name used for the generated file.
   *
   * @defaults name.toLowerCase()
   
   */
  filename?: string;
  /**
   * The slug used to identify the page in Docusaurus.
   *
   * @defaults filename
   */
  slug?: string;
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
  repo: string;
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
   * Link to the SDK documentation
   */
  href: string;
};
