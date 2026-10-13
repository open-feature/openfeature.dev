import React from 'react';
import Mermaid from '@theme-original/Mermaid';
import type MermaidType from '@theme/Mermaid';
import type { WrapperProps } from '@docusaurus/types';
import useIsBrowser from '@docusaurus/useIsBrowser';

type Props = WrapperProps<typeof MermaidType>;

// Mermaid renders client-side only, so keep the source in the SSR HTML for the llms.txt plugin.
export default function MermaidWrapper(props: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  return (
    <>
      {!isBrowser && (
        <pre className="language-mermaid" hidden>
          <code>{props.value}</code>
        </pre>
      )}
      <Mermaid {...props} />
    </>
  );
}
