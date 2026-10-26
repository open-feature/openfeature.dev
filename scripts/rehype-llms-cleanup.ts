import type { Element, ElementContent, Root, RootContent } from 'hast';
import type { Nodes as MdNodes, Root as MdRoot } from 'mdast';

/**
 * Normalizes Docusaurus-rendered HTML before @signalwire/docusaurus-plugin-llms-txt
 * converts it to Markdown:
 * - drops heading permalinks, buttons, the MCP install widget, and React text separators
 * - replaces YouTube embeds with a plain link
 * - restores code block languages, line breaks, and diff markers from Prism output
 * - labels each tab panel instead of emitting a detached list of tab names
 */

type Node = Root | RootContent;

const hasClass = (node: Node, name: string): boolean => {
  if (node.type !== 'element') return false;
  const cls: unknown = node.properties?.className;
  return Array.isArray(cls) ? cls.includes(name) : typeof cls === 'string' && cls.split(' ').includes(name);
};

const textOf = (node: Node): string =>
  node.type === 'text' ? node.value : 'children' in node ? node.children.map(textOf).join('') : '';

const findAll = (node: Node, pred: (n: Node) => boolean, out: Element[] = []): Element[] => {
  if (node.type === 'element' && pred(node)) out.push(node);
  else if ('children' in node) node.children.forEach((c) => findAll(c, pred, out));
  return out;
};

const el = (tagName: string, children: ElementContent[], properties: Element['properties'] = {}): Element => ({
  type: 'element',
  tagName,
  properties,
  children,
});

// Diff magic comments are rendered as line classes, so restore them as text markers.
const diffPrefix = (line: Element): string =>
  hasClass(line, 'code-block-diff-remove-line') ? '- ' : hasClass(line, 'code-block-diff-add-line') ? '+ ' : '';

const txt = (value: string): ElementContent => ({ type: 'text', value });

function transform<T extends Root | Element>(node: T): T {
  const out: RootContent[] = [];
  for (const child of node.children) {
    if (child.type === 'comment') continue;
    if (child.type !== 'element') {
      out.push(child);
      continue;
    }
    if (hasClass(child, 'hash-link') || hasClass(child, 'mcp-install') || child.tagName === 'button') continue;

    if (hasClass(child, 'video-container')) {
      const href = findAll(child, (n) => n.type === 'element' && n.tagName === 'a')[0]?.properties?.href;
      if (typeof href === 'string') out.push(el('p', [txt('Video: '), el('a', [txt(href)], { href })]));
      continue;
    }

    if (child.tagName === 'pre') {
      const lang = [child.properties?.className ?? []].flat().find((c) => String(c).startsWith('language-'));
      const lines = findAll(child, (n) => hasClass(n, 'token-line')).map((line) => diffPrefix(line) + textOf(line));
      const code = lines.length ? lines.join('\n') : textOf(child);
      out.push(el('pre', [el('code', [txt(code)], lang ? { className: [String(lang)] } : {})]));
      continue;
    }

    if (hasClass(child, 'tabs-container')) {
      const labels = findAll(child, (n) => n.type === 'element' && n.properties?.role === 'tab').map(textOf);
      const panels = findAll(child, (n) => n.type === 'element' && n.properties?.role === 'tabpanel');
      panels.forEach((panel, i) => {
        out.push(el('p', [el('strong', [txt(labels[i] ?? `Tab ${i + 1}`)])]));
        out.push(...transform(panel).children);
      });
      continue;
    }

    out.push(transform(child));
  }
  node.children = out as T['children'];
  return node;
}

export default function rehypeLlmsCleanup() {
  return (tree: Root) => {
    transform(tree);
  };
}

const fixIndexLinks = (node: MdNodes): void => {
  if (node.type === 'link') node.url = node.url.replace(/\/\.md(?=[#?]|$)/, '.md');
  if ('children' in node) node.children.forEach(fixIndexLinks);
};

/**
 * Remark plugin that runs after the plugin's link rewriting, which turns links to index pages like `/docs/foo/`
 * into `/docs/foo/.md` while the generated file is `/docs/foo.md`.
 */
export function remarkLlmsIndexLinks() {
  return (tree: MdRoot) => {
    fixIndexLinks(tree);
  };
}
