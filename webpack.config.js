
const ENV = process.env.NODE_ENV;
const PORT = 8888;
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const folders = {
	src: path.join(__dirname, './app'),
	dest: path.join(__dirname, './htdocs'),
	nodeModules: path.resolve(__dirname, './node_modules')
};

console.log('\r\n\r\n ============================\r\n\r\n');
console.log(`NODE_ENV: ${ENV} | PORT ${PORT}`);
console.log('\r\n\r\n ============================\r\n\r\n');

module.exports = {

	mode: ENV,

	devtool: (ENV === 'development') ? 'source-map' : 'cheap-module-source-map',

	entry: {
		'app': './app/index.js',
	},

	output: {
		path: folders.dest,
		publicPath: '/',
		pathinfo: (ENV === 'development'), // show comments in bundles
		filename:
			(ENV === 'development')
				? 'bundles/[name]/[name].js?[hash]'
				: 'bundles/[name]/[name].min.js?[hash]',
		chunkFilename:
			(ENV === 'development')
				? 'chunks/[name]/[name].js?[hash]'
				: 'chunks/[name]/[name].min.js?[hash]',
	},
	

	module: {

		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.pug$/,
				loader:
					(ENV === 'build' || ENV === 'prod')
						? 'pug-loader'
						: 'pug-loader?pretty',
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							minimize: (ENV === 'production'),
							sourceMap: (ENV === 'development')
						}
					},
					'postcss-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							minimize: (ENV === 'production'),
							sourceMap: (ENV === 'development')
						}
					},
					'postcss-loader'
				]
			},
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.vue'],
		modules: [
			'node_modules',
			folders.src
		],
		alias: {
			vue: 'vue/dist/vue.js',
			node_modules: folders.nodeModules,
			app: folders.src
		}
	},

	devServer: {
		port: PORT,
		noInfo: true,
		contentBase: folders.dest,
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: '/index.html' },
			]
		}
	},

	plugins: [

		new HtmlWebpackPlugin({
			inject: true,
			template: './app/index.pug',
			filename: './index.html',
			chunks: ['app'],
			chunksSortMode: function (a, b) {
				var order = ['app'];
				return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
			}
		})
	],


};