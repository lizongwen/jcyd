var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
	entry: __dirname + '/src/scripts/index',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'scripts/[name]-[chunkhash:5].js',
		publicPath: '../'
	},
	resolve: {
		extensions: ['.js', '.json', '.scss', '.css'],
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}]
			})
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'img/[name].[hash:5].[ext]'
				}
			}]
		}, {
			test: /\.(htm|html)$/i,
			loader: 'html-withimg-loader'
		},{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	},
	plugins: [
		// 自动生成index.html文件
		new HtmlWebpackPlugin({
			title: 'webpack标题',
			filename: 'view/index.html',
			template: __dirname + '/src/views/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		// 压缩JS
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		}),
		// 提取的CSS指定到目标文件夹下的style文件夹下面
		new ExtractTextPlugin("styles/index.css"),
		// 提取公共文件
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minify: {
				collapseWhitespace: true
			},
			filename: 'scripts/[name]-[chunkhash:5].js'
		})
	]
}