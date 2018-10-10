const webpackBase = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./config');
const devConfig = {
	entry: webpackBase._entry,
	output: webpackBase._output,
	module: webpackBase._module,
	
	plugins: [
		new HtmlWebpackPlugin({
			template: config.srcDir + '/index.html',
			filename: config.buildDir + '/views/index.html',
		}),
		new ExtractTextPlugin("styles/[name].css"),
	]
};
module.exports = devConfig;