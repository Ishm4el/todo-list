const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Todo List",
		}),
	],
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
