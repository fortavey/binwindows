const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if(isProd) {
        config.minimizer = [
            new TerserPlugin(),
            new OptimizeCssAssetsPlugin()
        ];
    }
    
    return config;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
      publicPath: '/',
      port: 9000,
      contentBase: path.resolve(__dirname, 'dist'),
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      hot: true,
    },
    optimization: optimization(),
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns:[
                { 
                    from: path.resolve(__dirname, 'src/assets/img'), 
                    to: path.resolve(__dirname, 'dist/assets/img') 
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        require('autoprefixer'),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: { publicPath: '' }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}