const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: __dirname + "/src/components/index.js",
	mode: "development",
	output: {
		path: __dirname + "/dist/assets",
		filename: "build.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['env', 'stage-0', 'react']
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff|woff2|svg|ttf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
							publicPath: '../dist/assets/fonts'
						}
					}
				]
			}
		]	
	},
	plugins: [
		new UglifyJsPlugin()
	]
}