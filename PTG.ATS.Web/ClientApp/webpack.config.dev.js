
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const merge = require('webpack-merge');

const CONFIG_BASE = require('./webpack.config');
const CONFIG_PATHS = require('./webpack.config.paths');

module.exports = merge(CONFIG_BASE, {
	devtool: 'cheap-module-source-map', // what type of sourcemaps do you want?
	devServer: {
		historyApiFallback: true,
		contentBase: CONFIG_PATHS.src.root, // where do source files live?
		disableHostCheck: true,
		host: '0.0.0.0',
		port: 3000,
		hot: false, // don't use hmr because it duplicates css files and crashes browser
		setup: (app) => {
			app.post('*', (req, res) => {
				res.redirect(req.originalUrl);
			});
		}
	},
	plugins: [
		new webpack.NamedModulesPlugin()
		//new webpack.HotModuleReplacementPlugin()
	]
});
