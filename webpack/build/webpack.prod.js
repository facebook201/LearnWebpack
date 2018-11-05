const webpack = require('webpack');
const merge = require('webpack-merge');
<<<<<<< HEAD
const common = require('./webpack.prod.conf');
=======
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
>>>>>>> 34af5ab8ddfd1d378b0b04a30d95409e61d162c4

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const prodConfig =  merge(common, {
  	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});

module.exports = smp.wrap(prodConfig)
