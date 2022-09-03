const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-green': colors.emerald[300],
        'primary-blue': colors.blue[300],
        'primary-red': colors.red[300],
        'primary-orange': colors.orange[300],
        'primary-fuchsia': colors.fuchsia[300],
      },
      maxHeight: {
        'screen-80': '80vh'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
