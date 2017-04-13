const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    context: path.resolve(__dirname, './..'),
    entry: '/',
    output: {
        filename: '[name].[hash].bundle.js',
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        })
    ]
};
module.exports = merge(baseConfig, config);