const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let configObj = {
    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },
    mode: 'development',
    entry: {
        one: ['webpack-hot-middleware/client?noInfo=true&reload=true&autoConnect=true&timeout=2000', path.resolve(__dirname, 'src/index.js')],
        two: ['webpack-hot-middleware/client?noInfo=true&reload=true&autoConnect=true&timeout=2000', path.resolve(__dirname, 'src/two.js')],        
    },
    // entry: ['webpack-hot-middleware/client?noInfo=true&reload=true&autoConnect=true&timeout=2000', path.resolve(__dirname, 'src/index.js')],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                // loader: 'url-loader'
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 9000,
                            fallback: 'file-loader'
                        }
                    },
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: '[name].[ext]',
                    //         outputPath: '/images/',
                    //         publicPath: '/images'
                    //     }
                    // }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'HTML插件',
            template: 'template.html',
            filename: 'index.html',
            chunks: ['one']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'two页面',
            template: 'template.html',
            filename: 'two.html',
            chunks: ['two']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}
module.exports = configObj;