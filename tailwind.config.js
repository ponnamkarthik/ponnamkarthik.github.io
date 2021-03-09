module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      '*.html'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        medium: '#00ab6c',
        twitter: '#1da1f2',
        linkedin: '#0077b5'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
