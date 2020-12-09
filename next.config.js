const withImages = require('next-images')
module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    webpack(config, options) {
        return config
    }
})









// const withOffline = require('next-offline')
// const withSass = require('@zeit/next-sass');
// const withCSS = require("@zeit/next-css");
// const withImages = require('next-images');
// const withPlugins = require('next-compose-plugins');

// module.exports = withOffline({
// 	target: process.env.NEXT_TARGET || 'serverless',
// 	workboxOpts: {
// 		swDest: 'static/service-worker.js',
// 		runtimeCaching: [
// 			{
// 				urlPattern: /[.](png|jpg|ico|css)/,
// 				handler: 'CacheFirst',
// 				options: {
// 					cacheName: 'assets-cache',
// 					cacheableResponse: {
// 						statuses: [0, 200]
// 					}
// 				}
// 			},
// 			{
// 				urlPattern: /^https:\/\/code\.getmdl\.io.*/,
// 				handler: 'CacheFirst',
// 				options: {
// 					cacheName: 'lib-cache'
// 				}
// 			},
// 			{
// 				urlPattern: /^http.*/,
// 				handler: 'NetworkFirst',
// 				options: {
// 					cacheName: 'http-cache'
// 				}
// 			}
// 		]
// 	}
// })
// const nextConfig = {
// 	target: 'server',
// 	webpack: (config, { dev }) => {
// 		config.module.rules.push({
// 			test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
// 			use: 'raw-loader'
// 		});

// 		return config;
// 	}
// };

// module.exports = withPlugins([withImages, withCSS({
// 	target: 'serverless',
// 	webpack(config) {
// 		config.module.rules.push({
// 			test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
// 			use: {
// 				loader: 'url-loader',
// 				options: {
// 					limit: 8192,
// 					publicPath: '/_next/static/',
// 					outputPath: 'static/',
// 					name: '[name].[ext]'
// 				}
// 			}
// 		})
// 		return config
// 	}
// })], nextConfig);
// module.exports = withCSS({
// 	webpack: function (config) {
// 		config.module.rules.push({
// 			test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
// 			use: {
// 				loader: 'url-loader',
// 				options: {
// 					limit: 100000,
// 					name: '[name].[ext]'
// 				}
// 			}
// 		})
// 		return config
// 	}

// })

// const withCSS = require('@zeit/next-css');

// // fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
// 	require.extensions['.css'] = (file) => { };
// }




// const path = require("path");

// const Html = require('html-webpack-plugin');

// module.exports = {
// 	entry: [
// 		"whatwg-fetch",
// 		"./js/index.js",
// 	],
// 	output: {
// 		filename: "js/out.js",
// 		path: path.resolve(__dirname, "build")
// 	},
// 	devServer: {
// 		port: 3001,
// 	},
// 	module: {
// 		rules: [

// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: "babel-loader",
// 				}
// 			},

// 			{
// 				test: /\.(sass|less|css)$/,
// 				loaders: ['style-loader', 'css-loader', 'less-loader']
// 			},

// 			{
// 				test: /\.(jpg|jpeg|gif|png)$/,
// 				use: {
// 					loader: 'file-loader',
// 					options: {
// 						name: '[name].[ext]',
// 						publicPath: 'images',
// 						outputPath: 'images',
// 					}
// 				}
// 			},

// 			{
// 				test: /\.(eot|ttf|woff|woff2)$/,
// 				use: {
// 					loader: 'file-loader',
// 					options: {
// 						name: '[name].[ext]',
// 						publicPath: 'fonts',
// 						outputPath: 'fonts',
// 					}
// 				}
// 			},
// 		]
// 	},

// 	plugins: [
// 		new Html({
// 			filename: 'index.html',
// 			template: './index.html',
// 		})
// 	]
// };

// module.exports = {
// 	webpackConfig: {
// 		module: {
// 			rules: [
// 				// Babel loader, will use your project’s .babelrc
// 				{
// 					test: /\.jsx?$/,
// 					exclude: /node_modules/,
// 					loader: 'babel-loader'
// 				},
// 				// Other loaders that are needed for your components
// 				{
// 					test: /\.css$/,
// 					loader: 'style-loader!css-loader?modules'
// 				},
// 				{
// 					test: /\.(jpg|png|svg)$/,
// 					use: {
// 						loader: 'url-loader',
// 						options: {
// 							limit: 25000
// 						}
// 					}
// 				}
// 			]
// 		}
// 	}
// }