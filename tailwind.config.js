const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      fontFamily: {
        Itim: "'Itim', cursive;",
        Kanit: "'kanit', sans-serif"
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'santa': "url('/Santa.svg')",

      },
      colors: {
        'christmas-red': {
          500: '#BB2528',
          600: '#A61E23',
          700: '#9B1B1F'
        },
        'christmas-green': {
          500: '#165B33',
          600: '#0F4A2E',
          700: '#0F4A2E'
        },
        'christmas-yellow': {
          500: '#FFCF00',
          600: '#FFB900',
          700: '#FFB300'
        },
        'navy-blue': {
          300: '#235E6F',
          800: '#0B2E4F',
          900: '#0B2E4F'

        }
      },
    },
  },
  plugins: [],
}