const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    // 创建import require的别名 使得引入模块变得简单
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        // 匹配时仅仅使用第一个数组
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader']
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
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.styl$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'react' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
