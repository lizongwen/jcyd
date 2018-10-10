const config = require('./config');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseConfig = {
	_entry: {
		app: config.srcDir + '/app.js'
	},
	_output: {
		path: config.buildDir + '/assets',
		filename: 'scripts/[name].js'
	},
	_module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			include: [
				path.resolve(config.srcDir)
			],
			exclude: [
				path.resolve(__dirname, '../node_modules')
			],
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: [{
							loader: 'css-loader',
						}],
						fallback: 'vue-style-loader'
					})
				}
			}
		}]
	}
}
module.exports = baseConfig;