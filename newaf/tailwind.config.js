const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: {
      enabled: true,
      content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
      ],
    },
    darkMode: 'class',
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        },
        colors: {
          'primary': colors.green[300],
        }
      },
    },
    variants: {
      typography: ["responsive", "dark"],
      extend: {
        backgroundColor: ['dark', 'responsive'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography')
    ],
  }
  