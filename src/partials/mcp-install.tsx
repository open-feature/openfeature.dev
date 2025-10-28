import React from 'react';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

export default function MCPInstall() {
  const handleCopyPrompt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('Install OpenFeature into this app');
  };

  return (
    <details className="alert alert--info" style={{ marginBottom: '1rem' }}>
      <summary className="mcp-install-summary">
        <strong>MCP Install</strong>
        <button
          className="mcp-install-button"
          onClick={handleCopyPrompt}
          style={{ marginBottom: 0 }}
        >
          <span>📋 Copy Prompt</span>
        </button>
      </summary>

      <div style={{ marginTop: '1rem' }}>
        <p>
          Follow the <Link to="/docs/reference/other-technologies/mcp">MCP Getting Started</Link> guide to quickly set up the OpenFeature MCP server and connect your AI tool.
        </p>

        <ul>
          <li>Run this prompt: <code>&quot;Install OpenFeature into this app&quot;</code></li>
        </ul>

        <p style={{ marginTop: '1rem' }}>
          <strong>Quick Install:</strong>
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
          <a
            href="cursor://anysphere.cursor-deeplink/mcp/install?name=OpenFeature&config=eyJjb21tYW5kIjogIm5weCIsICJhcmdzIjogWyIteSIsICJAb3BlbmZlYXR1cmUvbWNwIl19Cg=="
            className="mcp-install-button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: 0 }}
          >
            📦 Install in Cursor
          </a>
          <a
            href="https://vscode.dev/redirect/mcp/install?name=OpenFeature&config=%7B%22command%22%3A%20%22npx%22%2C%20%22args%22%3A%20%5B%22-y%22%2C%20%22%40openfeature%2Fmcp%22%5D%7D"
            className="mcp-install-button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: 0 }}
          >
            📦 Install in VS Code
          </a>
        </div>

        <CodeBlock language="bash">
          {'claude mcp add --transport stdio openfeature npx -y @openfeature/mcp'}
        </CodeBlock>
      </div>
    </details>
  );
}
