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
  entry: './src/index.tsx',
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
      {
        test: /\.t(s|sx)?$/,
        exclude: /node_modules/,
        loader: ['awesome-typescript-loader', 'eslint-loader']
      },
      {
        test: /\.j(s|sx)?$/,
        loader: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    }),
  ]
});
