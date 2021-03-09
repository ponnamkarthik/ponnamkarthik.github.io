module.exports = {
  purge: [
    "**.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        medium: '#00ab6c',
        twitter: '#1da1f2',
        linkedin: '#0077b5'
      },
      filter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
