module.exports = {
	entry: __dirname + '/src/index.jsx',
	output: {
		path: __dirname + '/dist/js',
		filename: 'build.js'
	},
	mode: 'development',
	resolve: {
		'extensions': ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0', 'react']
				}
			},
			{
				test: /\.(css)$/,
				exclude: /(node_modules)/,
				use: ['style-loader', 'css-loader']
			}, 
			{
				test: /\.(svg|ttf|woff|woff2|eot)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: '../fonts/',
						publicPath: '../dist/fonts/'
					}
				}
			}
		]
	}
};