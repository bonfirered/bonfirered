const path = require('path');

/**
 * Define loaders
 * @return {Array}
 */
function getRules() {
  return [
    {
      test: /(\.js)/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /(\.jpg|\.png)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },
    {
      test: /\.json/,
      loader: 'json-loader',
    },
  ];
}

module.exports = ({
  dev,
  scripts: {
    fabricator: { src: fabSrc },
    toolkit: { src: scriptSrc },
  },
  dest,
}) => {
  return {
    mode: dev ? 'development' : 'production',
    entry: {
      'fabricator/scripts/f': fabSrc,
      'toolkit/scripts/toolkit': scriptSrc
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        TweenLite: path.resolve('node_modules/gsap/src/minified/TweenLite.min.js'),
        TweenMax: path.resolve('node_modules/gsap/src/minified/TweenMax.min.js'),
        TimelineLite: path.resolve('node_modules/gsap/src/minified/TimelineLite.min.js'),
        TimelineMax: path.resolve('node_modules/gsap/src/minified/TimelineMax.min.js'),
    
        ScrollMagic: path.resolve('node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
        'animation.gsap': path.resolve('node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js')
      }
    },
    output: {
      path: path.resolve(__dirname, dest, 'assets'),
      filename: '[name].js',
      pathinfo: dev,
    },
    devtool: dev ? 'cheap-module-eval-source-map' : false,
    module: {
      rules: getRules(),
    },
  };
};
