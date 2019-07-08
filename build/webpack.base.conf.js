const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const smp = new SpeedMeasurePlugin();

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = smp.wrap({
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.json', '.js', '.tsx'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.j(s|sx)?$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
      // {
      //   exclude: [/\.less$/, /\.json$/, /\.css$/],
      //   loader: 'file-loader',
      //   options: {
      //     name: 'static/[name].[hash:8].[ext]'
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    }),
  ]
});
