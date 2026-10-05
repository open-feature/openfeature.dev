/**
 * Checks that monochrome logos (static/img/*-no-fill.svg) take their colour from the theme.
 *
 * Ecosystem cards set `fill` on the card and let the logo inherit it, so any hard-coded paint
 * (e.g. fill="#000000") renders the logo the wrong colour in dark mode.
 *
 * Usage: node scripts/lint-svg-logos.ts [files...]
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const LOGO_DIR = 'static/img';
const LOGO_SUFFIX = '-no-fill.svg';

// Paint attributes may only defer to the theme.
const PAINT_ATTRIBUTES = new Set(['fill', 'stroke']);
const ALLOWED_PAINT_VALUES = new Set(['currentcolor', 'none']);

const FORBIDDEN_ATTRIBUTES = new Set([
  'style',
  'color',
  'opacity',
  'fill-opacity',
  'stroke-opacity',
  'stop-color',
  'stop-opacity',
  'filter',
  'mask',
]);

const FORBIDDEN_ELEMENTS = new Set([
  'style',
  'image',
  'foreignobject',
  'lineargradient',
  'radialgradient',
  'pattern',
  'mask',
  'filter',
]);

// Logos that can't be made monochrome without changing the vendor's mark.
const ALLOWLIST = new Set<string>([
  // Theme-aware gradients driven by a CSS variable.
  'hyphen-no-fill.svg',
  // The corner square is drawn at half opacity on purpose.
  'unleash-no-fill.svg',
]);

export function lintSvg(source: string): string[] {
  const errors: string[] = [];
  const markup = source.replace(/<!--[\s\S]*?-->/g, '');

  for (const tag of markup.matchAll(/<([A-Za-z][\w:.-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g)) {
    const element = tag[1];
    const line = markup.slice(0, tag.index).split('\n').length;

    if (FORBIDDEN_ELEMENTS.has(element.toLowerCase())) {
      errors.push(`line ${line}: <${element}> is not allowed`);
    }

    for (const attr of tag[2].matchAll(/([\w:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
      const name = attr[1].toLowerCase();
      const value = (attr[3] ?? attr[4]).trim();

      if (FORBIDDEN_ATTRIBUTES.has(name)) {
        errors.push(`line ${line}: ${attr[1]}="${value}" on <${element}> is not allowed`);
      } else if (PAINT_ATTRIBUTES.has(name) && !ALLOWED_PAINT_VALUES.has(value.toLowerCase())) {
        errors.push(`line ${line}: ${attr[1]}="${value}" on <${element}> must be "currentColor" or "none"`);
      } else if (name === 'href' || name === 'xlink:href') {
        if (!value.startsWith('#')) {
          errors.push(`line ${line}: external reference ${attr[1]}="${value}" is not allowed`);
        }
      }
    }
  }

  return errors;
}

function main() {
  const args = process.argv.slice(2);
  const files = args.length
    ? args.filter((file) => file.endsWith(LOGO_SUFFIX))
    : readdirSync(LOGO_DIR)
        .filter((file) => file.endsWith(LOGO_SUFFIX))
        .map((file) => join(LOGO_DIR, file));

  let failed = 0;
  for (const file of files) {
    if (ALLOWLIST.has(file.split('/').pop() ?? '')) continue;

    const errors = lintSvg(readFileSync(file, 'utf8'));
    if (errors.length) {
      failed++;
      console.error(`${file}\n${errors.map((error) => `  ${error}`).join('\n')}`);
    }
  }

  if (failed) {
    console.error(
      `\n${failed} logo(s) failed. Monochrome logos must inherit their colour: remove hard-coded fills, strokes, ` +
        'opacity, styles, gradients and images. Use fill="currentColor" or stroke="currentColor" only where needed.',
    );
    process.exit(1);
  }
  console.log(`Checked ${files.length} logo(s).`);
}

main();
