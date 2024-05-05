/** @type {import('tailwindcss').Config} */
const { withMaterialColors } = require('tailwind-material-colors');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const config = {
  content: [
    join(__dirname, './src/**/*.{jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = withMaterialColors(
  config,
  {
    // Your base colors as HEX values. 'primary' is required.
    primary: '#663399',
  },
  {
    /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
    scheme: 'content',
    // contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
    contrast: 0,
  }
);
