var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry:[
    './assets/static/js/index',
	],

  output: {
      path: path.resolve('./assets/static/bundles/'),
      filename: '[name]-[hash].js',
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'], },
    ],
  },

  resolve: {
    modules: [
          'node_modules',
          'bower_components'
    ],
    extensions: ['.js', '.jsx']
  },
}
