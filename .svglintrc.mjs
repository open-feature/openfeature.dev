// Monochrome logos (static/img/*-no-fill.svg) must inherit their colour from the theme.
// Ecosystem cards set `fill` on the card, so any hard-coded paint renders wrong in dark mode.
const themePaint = /^(currentColor|none)$/i;

/** @type {import('svglint').Config} */
export default {
  rules: {
    valid: true,
    elm: {
      style: false,
      image: false,
      foreignObject: false,
      linearGradient: false,
      radialGradient: false,
      pattern: false,
      mask: false,
      filter: false,
    },
    attr: [
      {
        'rule::selector': '*',
        'fill?': themePaint,
        'stroke?': themePaint,
        'href?': /^#/,
        'xlink:href?': /^#/,
        style: false,
        color: false,
        opacity: false,
        'fill-opacity': false,
        'stroke-opacity': false,
        'stop-color': false,
        'stop-opacity': false,
        filter: false,
        mask: false,
      },
    ],
  },
  ignore: [
    // Theme-aware gradients driven by a CSS variable.
    'static/img/hyphen-no-fill.svg',
    // The corner square is drawn at half opacity on purpose.
    'static/img/unleash-no-fill.svg',
  ],
};
