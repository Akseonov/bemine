const path = require( 'node:path' );
const glob = require( 'glob' );
const { VueLoaderPlugin } = require( 'vue-loader' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require( 'eslint-webpack-plugin' );
const StylelintPlugin = require( 'stylelint-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV, HOST, PORT } = process.env;

const isDev = NODE_ENV === "development";
const host = HOST || "localhost";
const port = PORT || 3000;

const paths = {
	src: path.resolve( __dirname, 'src' ),
	html: path.resolve( __dirname, 'src', 'assets', 'html' ),
	build: path.resolve( __dirname, 'build' ),
};

module.exports = {
	entry: {
		'index': './src/index.ts',
	},
	output: {
		filename: 'js/[name].js',
		chunkFilename: isDev ? (pathData) => {
			if (typeof pathData.chunk.id === "number") {
				return 'js/' + pathData.chunk.id + '.js';
			}

			return 'js/' + pathData.chunk.id.split('_').at(-2) + '.js';
		} : 'js/[name].js',
		path: paths.build,
		clean: true,
		// publicPath: "./"
	},
	stats: {
		assets: true,
		modules: false,
	},
	devtool: isDev
		? 'eval-cheap-module-source-map'
		: 'eval-cheap-module-source-map',
	devServer: {
		static: {
			publicPath: '/',
		},
		hot: false,
		host,
		port,
		client: {
			overlay: {
				errors: true,
				warnings: true,
			},
		},
		devMiddleware: {
			index: true,
			writeToDisk: true,
			publicPath: '/',
			stats: 'minimal',
		},
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				include: paths.src,
				loader: 'vue-loader',
			},
			{
				test: /\.ts(x)?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(sc|sa|c)ss?$/,
				use: [
					// isDev ? 'style-loader' : MiniCssExtractPlugin.loader, //вычищает все стили. хз почему
					'style-loader',
					'css-loader',
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"autoprefixer",
										{
											// Options
										},
									],
								],
							},
						},
					},
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title: 'Mining Hotel',
			template: 'public/index.html'
		}),
		new ESLintPlugin( {
			fix: false,
			extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
			cache: false,
			emitWarning: true,
			emitError: true
		} ),
		new StylelintPlugin( {
			emitWarning: true,
			files: [ 'src/**/*.{vue,scss}' ],
		} ),
		new CleanWebpackPlugin(),
		new PurgecssPlugin({
			paths: glob.sync(`${paths.src}/**/*`,  { nodir: true }),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		})
	],
	resolve: {
		extensions: [
			'.ts', '.tsx', '.vue', '.js'
		],
		modules: [
			'assets', 'node_modules'
		],
		alias: {
			'@': paths.src,
		},
	},
	optimization: {
		// runtimeChunk: 'single',
		// splitChunks: {
		// 	hidePathInfo: true,
		// 	cacheGroups: {
		// 		vendors: {
		// 			documents: /node_modules/,
		// 			chunks: 'all',
		// 			name: 'vendors',
		// 			enforce: true,
		// 		},
		// 	},
		// },
		splitChunks: {
			cacheGroups: {
				style: {
					name: 'style',
					test: /style\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
				editor: {
					name: 'editor',
					test: /editor\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	performance: {
		maxEntrypointSize: 5512000,
		maxAssetSize: 5512000
	}
};
