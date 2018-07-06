const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = merge(common, {  
    mode: 'development',                                                              // oem功能目录入口 ../frontend/saofu-agent-admin/src/js/visualization/functional-configuration.js'
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true&autoConnect=true', path.resolve(__dirname, './src/index.js')], 
    // entry: {
    //     pageOne: ['webpack-hot-middleware/client?noInfo=true&reload=true&autoConnect=true', path.resolve(__dirname, './src/main.js')]
    // },  
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
            
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),  // 查看依赖
        new webpack.HotModuleReplacementPlugin(), // 启动 HMR 热更新
        new VueLoaderPlugin(), // 解析 vue 文件
    ],  
    output: {
        filename: 'main.js',
        // publicPath: '/'
    }
})