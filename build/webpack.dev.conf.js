const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.conf');
const env = config.dev.env;

module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: '../dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
});
