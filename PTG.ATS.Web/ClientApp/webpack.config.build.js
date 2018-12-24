process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const CONFIG_BASE = require('./webpack.config');
const CONFIG_PATHS = require('./webpack.config.paths');

module.exports = merge(CONFIG_BASE, {
	plugins: [
        new UglifyJSPlugin(),
		// Remove dist directory
		new CleanWebpackPlugin([CONFIG_PATHS.dist.root]),
		// Create a new dist directory and copy src assets there
		new CopyWebpackPlugin([
			{
				from: CONFIG_PATHS.src.assets,
				to: CONFIG_PATHS.dist.assets,
				ignore: ['**/.*'] // ignore .DS_Store files
			}
		])
	]
});
