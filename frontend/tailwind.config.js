const colors = require('tailwindcss/colors');

module.exports = {
    //mode: 'jit',
    purge: {
      enabled: false,
      content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
      ],
    },
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary-green': colors.emerald[300],
          'primary-blue': colors.blue[300],
          'primary-red': colors.red[300],
          'primary-orange': colors.orange[300],
          'primary-fuchsia': colors.fuchsia[300],
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp')
    ],
  }
  