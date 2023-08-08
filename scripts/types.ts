import type { Technology } from '@site/src/datasets';

export type SDK = {
  /**
   * The name of the technology used for the SDK.
   */
  name: Technology;
  /**
   * The name used for the generated file.
   *
   * @defaults name.toLowerCase()
   *
   */
  filename?: string;
  /**
   * The file extension used for the generated file.
   *
   * @default mdx
   */
  fileExtension?: string;
  /**
   * The type of SDK based on the static and dynamic paradigms
   */
  type: 'client' | 'server';
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
};
