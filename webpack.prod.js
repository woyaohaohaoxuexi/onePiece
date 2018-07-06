const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'production',
    entry: {
        main: './src/index.js',
        vendor: ['vue', 'axios']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?minimize=true', 'sass-loader']
                })
            },
            {
                test: /\.vue$/,
                // use: {
                //     loader: 'vue-loader',
                //     options: {
                //         extractCSS: true
                //     }
                // }
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextWebpackPlugin.extract({
                            use: 'css-loader?minimize=true',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                        scss: ExtractTextWebpackPlugin.extract({
                            use: ['css-loader?minimize=true', 'sass-loader'],
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                        less: ExtractTextWebpackPlugin.extract({
                            use: ['css-loader?minimize=true', 'less-loader'],
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        })
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['../frontend/logistics-web-admin/dist']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextWebpackPlugin('[name].[contenthash].min.css'),
        new webpack.HashedModuleIdsPlugin(), // 对公共库不改变hash
        // 提取公共库 vue axios 
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // name和names：chunk的名称，如果这个chunk已经在entry中定义，该chunk会被直接提取；如果没有定义，则生成一个空的chunk来提取其他所有chunk的公共代码。
            
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',  // 提取 公共的代码。
        //     minChunks: 2
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',  // 提取 webpack 运行的引导代码
        }),
        new UglifyjsWebpackPlugin({
            cache: true,  // 启用缓存
            parallel: true, // 使用多线程并行，提高构建速度。
            sourceMap: false, // 开发环境用，调试代码
            uglifyOptions: {
                compress: {
                    warnings: false,  // 去掉警告
                    drop_console: true, // 去掉 console.log
                    drop_debugger: true, // 去掉 debugger
                    // toplevel: true, // 删除未引用的函数或变量，
                }
            }
        })
    ],
    output: {
        // publicPath: './js/preorder/',
        filename: '[name].[chunkhash].min.js',
    }
}) 