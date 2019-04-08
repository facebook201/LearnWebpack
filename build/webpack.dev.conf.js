const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.conf');
const env = config.dev.env;
const express = require('express');
const app = express();

const apiData = require('../public/mock/order.json');


module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: '../dist',
    before: function(app, server) {
      app.get('/api/order', (req, res) => {
        res.json({
          errno: 0,
          data: apiData
        });
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
});
