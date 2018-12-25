/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Get our file path variables
const CONFIG_PATHS = require('./webpack.config.paths');

// Are we running the 'dev' task?
const IS_DEV = (process.env.npm_lifecycle_event === 'dev');

// Shared options between multiple loaders
const OPTIONS = {
	minimize: (IS_DEV ? false : true),  // minimize output in production
	sourceMap: (IS_DEV ? true : false) // apply sourcemaps in dev (only applies when devtool prop is set)
	// minimize: (false),
	// sourceMap: (false), // apply sourcemaps in dev (only applies when devtool prop is set)
};

// Base config gets merged in environment specific config files
module.exports = {
	//
	// Define our entry files
	//
	entry: {
		vendor: ['babel-polyfill', 'isomorphic-fetch'],
		app: [`${CONFIG_PATHS.src.root}/index.js`, `${CONFIG_PATHS.src.styles}/app.scss`]
	},
	//
	// Define our output files
	//
	output: {
		filename: `${CONFIG_PATHS.output.scripts}/[name].js`, // JS filenames only. CSS files are created by ExtractTextPlugin
		path: CONFIG_PATHS.dist.root, // location of all compiled files
		publicPath: CONFIG_PATHS.output.root // path used to reference files on the frontend
    },
    optimization: {
        // Speed up compile times
        // new HardSourceWebpackPlugin(),
        // Create our JS entry files and
        // consolidate webpack's map of all modules into one 'manifest' file
        splitChunks:{
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
			reuseExistingChunk: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
	//
	// Define our plugins
	//
	plugins: [
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
		// Lint our CSS
		new StyleLintPlugin(),
		// Create our CSS entry files
		new ExtractTextPlugin({
			filename: `${CONFIG_PATHS.output.styles}/[name].css`
		}),

		//new HtmlWebPackPlugin({
		//	inject: true,
		//	template: `${CONFIG_PATHS.src.html}/index.ejs`
		//})
        //new webpack.optimize.CommonsChunkPlugin({
        //    names: ['app', 'vendor', 'manifest'],
        //    minChunks: Infinity,
        //})
	],
	//
	// Define shortcuts for import/require paths
	//
	resolve: {
		extensions: [
			'.js',
			'.jpg', '.jpeg', '.png', '.gif', '.svg'
		],
		alias: {
			scripts: path.resolve(__dirname, CONFIG_PATHS.src.scripts),
            images: path.resolve(__dirname, CONFIG_PATHS.src.images),
            models: path.resolve(__dirname, CONFIG_PATHS.src.models)
		}
	},
	//
	// Define our loaders
	//
	module: {
		rules: [
			// Images that are imported in JS
			// (images from CSS/HTML are handled in CopyWebpackPlugin or devServer.contentBase)
			{
				test: /\.(svg|png|gif|jpe?g)/i,
				include: CONFIG_PATHS.src.images,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: CONFIG_PATHS.src.root,
							publicPath: CONFIG_PATHS.output.root
						}
					}
				]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        context: CONFIG_PATHS.src.root,
                        publicPath: CONFIG_PATHS.output.root
                    }
                }]
            },
			// Sass
			{
				test: /\.scss$/,
				include: CONFIG_PATHS.src.styles,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: OPTIONS.minimize,
								sourceMap: OPTIONS.sourceMap
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: OPTIONS.sourceMap
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: OPTIONS.sourceMap
							}
						}
					]
				}))
			},
			// HTML using EJS templates
			//{
			//	test: /\.ejs$/,
			//	loader: 'ejs-compiled-loader',
			//	include: CONFIG_PATHS.src.html
			//},
			// JS linter
			{
				enforce: 'pre',
				test: /\.js$/,
                include: CONFIG_PATHS.src.scripts,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					configFile: path.resolve(__dirname, '.eslintrc.json')
				}
			},
			// JS transpiler
			{
                test: /\.js|.jsx$/,
                include: [CONFIG_PATHS.src.scripts, CONFIG_PATHS.src.models],
				use: {
					loader: 'babel-loader',
					options: {
                        presets: ['es2015', 'react','stage-0'],
						compact: OPTIONS.minimize
					}
				}
			}
		]
	}
};
