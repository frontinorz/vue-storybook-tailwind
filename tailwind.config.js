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
      borderColor: ['checked', 'disabled'],
      outline: ['checked'],
      cursor: ['disabled'],
      margin: ['last']
    }
  },
  plugins: []
}