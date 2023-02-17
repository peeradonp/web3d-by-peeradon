const colors = require('tailwindcss/colors');
module.exports = {
  important: false,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: ['"BaiJamjuree"']
    },
    fontSize: {
      10: '10px',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1xl': '22px',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: colors.white,
        secondary: colors.black,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        emerald: colors.emerald,
        teal: colors.teal,
        orange: colors.orange,
        yellow: colors.yellow,
        success: '#4ACE8F',
        wait: '#F9C153',
        new: '#1890FF',
        error: '#F0536F',
      },
      typography: {
        DEFAULT: {
          css: {
            strong: {
              color: 'unset',
              fontWeight: '800',
            },
          },
        },
      },
      maxHeight: {
        116: '29rem' /*464px*/,
        125: '31.25rem' /*500px*/,
        140: '35rem' /*560px*/,
        150: '37.5rem' /*600px*/,
        190: '47.5rem' /*760px*/,
      },
      height: {
        116: '29rem' /*464px*/,
        125: '31.25rem' /*500px*/,
        140: '35rem' /*560px*/,
        150: '37.5rem' /*600px*/,
      },
      minHeight: {
        18: '4.5rem' /*72*/,
        62: '15.5rem' /*248px*/,
        150: '37.5rem' /*600px*/,
      }
    },
  },
  plugins: []
};
