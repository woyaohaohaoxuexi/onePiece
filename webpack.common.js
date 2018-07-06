const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/main.js',
    externals: {
        // jquery: "window.$",
        // popup: "window.popup",
        _hmt: "window._hmt"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                        // plugins: ['@babel/transform-runtime']
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 9000,
                            fallback: 'file-loader'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            // libs: path.relative(__dirname, "common/js/lib"),
            // common: path.resolve(__dirname, "../frontend/common"),
            // vue: path.resolve(__dirname, '../frontend/common/js/lib/vue.js'),
            // libs: path.resolve(__dirname, "../frontend/common/js/lib"),

            // vue: 'vue/dist/vue.esm.js' 
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist")
    }
}