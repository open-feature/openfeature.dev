/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emphasis: {
          100: 'var(--ifm-color-emphasis-100)',
          200: 'var(--ifm-color-emphasis-200)',
          300: 'var(--ifm-color-emphasis-300)',
          400: 'var(--ifm-color-emphasis-400)',
          500: 'var(--ifm-color-emphasis-500)',
          600: 'var(--ifm-color-emphasis-600)',
          700: 'var(--ifm-color-emphasis-700)',
          800: 'var(--ifm-color-emphasis-800)',
          900: 'var(--ifm-color-emphasis-900)',
        },
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
        primary: 'var(--ifm-color-primary)',
        secondary: 'var(--ifm-color-content-secondary)',
        content: 'var(--ifm-color-content)',
        selected: 'var(--ifm-hover-overlay)',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
