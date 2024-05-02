/** @type {import('tailwindcss').Config} */
const { withMaterialColors } = require('tailwind-material-colors');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

// TODO: refactor to @shared/ui
const fontTokens = {
  md__sys_typescale__title_large__font: 'Roboto',
  md__sys__typescale__title_large__weight: 400,
  md__sys__typescale__title_large__size: 22,
  md__sys__typescale__title_large__line_height: 28,
  md__sys__typescale__title_large__tracking: 0,
};

// TODO: refactor to @shared/utils
const pxToRem = (px) => px / 16;

const config = {
  content: [
    join(__dirname, './src/**/*.{jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // TODO: refactor to @shared/ui
      fontWeight: {
        titleLarge: fontTokens.md__sys__typescale__title_large__weight,
      },
      fontSize: {
        titleLarge: fontTokens.md__sys__typescale__title_large__size,
      },
      lineHeight: {
        titleLarge: pxToRem(
          fontTokens.md__sys__typescale__title_large__line_height
        ),
      },
      letterSpacing: {
        titleLarge: fontTokens.md__sys__typescale__title_large__tracking,
      },
    },
  },
  plugins: [],
};

module.exports = withMaterialColors(
  config,
  {
    // Your base colors as HEX values. 'primary' is required.
    primary: '#6750A4',
  },
  {
    /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
    scheme: 'content',
    // contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
    contrast: 0,
  }
);
