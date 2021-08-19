module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      width: {
        content: 'fit-content',
      },
    },
    colors: {
      'light-grey': '#303030',
      'dark-grey': '#222222',
      purple: '#7F00FF',
      orange: '#F57A00',
      white: '#F5F5F5',
    },
    fontFamily: {
      sans: 'Ubuntu',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
