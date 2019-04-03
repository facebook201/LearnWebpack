const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // bundleAnalyzerPlugin 分析有哪些东西被打包进去
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require('os');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = config.build.env;
// 是否是生成环境
// const isProd = env.NODE_ENV === 'production';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: 'scripts/[name].bundle.[hash:8].js'
  },
  performance: {
    hints: false,
    maxAssetSize: 100000
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',   // initial、async和all
      minSize: 30000,   // 形成一个新代码块最小的体积
      maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
      maxInitialRequests: 3,   // 最大初始化请求数
      automaticNameDelimiter: '~',   // 打包分割符
      name: true,
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /antd/,
          priority: 100,
          name: 'vendors',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        parallel: os.cpus().length,
        cache: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
              warnings: false,
              drop_console: true,
              collapse_vars: true,
              reduce_vars: true,
          },
          output: {
              beautify: false,
              comments: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new CleanWebpackPlugin(['dist']),
    new BundleAnalyzerPlugin({ analyzerPort: 8888 }),
    // 提出CSS
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css'
    })
  ]
});



