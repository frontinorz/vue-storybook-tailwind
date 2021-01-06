module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      borderColor: ['checked'],
      outline: ['checked'],
      cursor: ['disabled']
    }
  },
  plugins: []
}