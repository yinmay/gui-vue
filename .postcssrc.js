// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-selector-namespace': {
      namespace(css) {
        // console.log(123, css);
        return '.gui-vue';
      },
    },
  },
};
