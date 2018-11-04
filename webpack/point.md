#### Webpack 4.0

* mode: production

```javascript

module.exports = {
    // production 模式 build的时候 会直接自己压缩打包
    // 也可以在命令行接口中 使用 --optimize-minimize 标记 使用 UglifyJSPlugin
    mode: 'production'
};

```



* webpack-merge

```javascript
// webpack.common.conf.js

'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      title: 'webpack'
    })
  ]
};

// 生产环境 webpack.prod.conf.js
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production'
});


// 开发环境 webpack.dev.conf.js
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist'
  }
});


```



* 