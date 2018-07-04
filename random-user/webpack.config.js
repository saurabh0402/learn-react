module.exports = {
	entry: __dirname + '/src/index.jsx',
	output: {
		filename: 'build.js',
		path: __dirname + '/dist/js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0', 'react']
				}
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff|woff2|ttf|svg|eot)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: '../fonts/',
						publicPath: '../dist/fonts'
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};