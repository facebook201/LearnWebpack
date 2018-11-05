const merge = require('webpack-merge');
const common = require('./webpack.base.conf');

module.exports = merge(common, {
  mode: 'production'
});
