const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryPath = path.join(__dirname, '../src/public/script');
const outputPath = path.join(__dirname, '../build/public');

module.exports = {
	// entry:[entryPath+"/app.js",entryPath+"/index.js"],//多入口
	entry: { //多入口
		index: [entryPath + "/index", entryPath + "/add"],
		tags: [entryPath + "/tags"]
	},
	output: {
		path: outputPath,
		filename: 'scripts/[name]-[chunkhash:5].js',
		publicPath:'../'
	},
	resolve: {
		extensions: ['.js', '.json', '.less', '.css', '.es'],
	},
	module: {
		rules: [
			{
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
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader',
						options: {
							minimize: true
						}
					}, {
						loader: 'less-loader',
					}]
				})
			},
			{
				test: /\.es$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'images/[name].[hash:5].[ext]'
					}
				}]
			}
		]
	},
	plugins: [
		// 定义环境
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"prod"'
			}
		}),
		new LiveReloadPlugin({
			appendScriptTag: true
		}),
		// 自动生成index.html文件
		new HtmlWebpackPlugin({
			title: 'webpackdemo2',
			filename: '../views/layout.html',
			template:'src/widget/layout.html',
			inject:false,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		new HtmlWebpackPlugin({
			title: 'webpackdemo2',
			filename: '../widget/index.html',
			template:'src/widget/index.html',
			inject:false,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		new HtmlWebpackPlugin({
			title: 'webpackdemo2',
			filename: '../views/index.html',
			template:'src/views/index.js',
			inject:false,
			chunks:['vendor','index','tags'],
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		// 提取的CSS指定到目标文件夹下的style文件夹下面
		new ExtractTextPlugin("style/index-[chunkhash:5].css"),
		// 压缩JS
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		}),
		// 提取公共文件
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minify: {
				collapseWhitespace: true
			},
			filename: 'scripts/common/[name]-[chunkhash:5].js'
		}),
	]
}