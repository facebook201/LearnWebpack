const merge = require('webpack-merge');
const common = require('./webpack.prod.conf');

module.exports = merge(common, {
  mode: 'production'
});