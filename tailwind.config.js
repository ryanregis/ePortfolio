module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    container: {
      center: true,
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        blue: {
          lightest: "#D6EEF7",
          light: "#ABC0D8",
          DEFAULT: "#3B82F6",
          dark: "#2D5D85",
          darkest: "#143652",
        },

        yellow: {
          DEFAULT: "#FCF54F",
        },

        orange: {
          DEFAULT: "#F07142",
        },

        green: {
          DEFAULT: "#ACE260",
        },

        black: {
          DEFAULT: "#363636",
        },

        white: {
          DEFAULT: "#FFFEFF",
        },

        gray: {
          DEFAULT: "#9A9A9A",
        },
      },

      fontFamily: {
        'montserrat': ["'Montserrat'", 'sans-serif'],
        'source-sans': ["'Source Sans Pro'", 'sans-serif'],
        'public-sans': ["'Public Sans'", 'sans-serif'],
      },

      boxShadow: {
        'yellow': '0px 0px 15px 8px #FCF54F',
        'green': '0px 0px 20px 4px #ACE260',
        'orange': '0px 0px 10px 3px #F07142',
        'blue': '0px 0px 5px 2px #2D5D85',
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    scrollSnapType: ['responsive'],
    extend: {},
  },
  plugins: [
    require('tailwindcss-scroll-snap'),
    require('tailwind-scrollbar'),
  ],
}
