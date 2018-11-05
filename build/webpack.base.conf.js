const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'stylus-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'react' })
  ]
};

// module.exports = {
//   entry: {
//     app: './src/index.js'
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, '../dist')
//   },
//   plugins: [
//     new CleanWebpackPlugin(['./dist']),
//     new HtmlWebpackPlugin({
//       title: 'webpack'
//     })
//   ]
// };
