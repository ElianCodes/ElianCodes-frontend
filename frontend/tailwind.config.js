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
    darkMode: 'media',
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        },
        colors: {
          'primary-green': colors.emerald[300],
          'primary-blue': colors.blue[300],
          'primary-red': colors.red[300],
          'primary-orange': colors.orange[300],
          'primary-fuchsia': colors.fuchsia[300],
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
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp')
    ],
  }
  