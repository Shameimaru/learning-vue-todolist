/**
 * Created by Administrator on 2017/3/27.
 */
const path = require('path');
const webpack = require('webpack');
const
    devPlugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vue', 'menifest']
        })
    ],
    prodPlugins = [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: true,
            comments: false,
            warning: false
        })
    ],
    isProd = process.env.NODE_ENV === 'prod';
const plugins = [...devPlugins, ...(isProd ? prodPlugins : [] )];
module.exports = {
    entry: {
        main: './src/js/index.js',
        vue: 'vue'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: path.resolve(__dirname, './dist')
    },
    devtool: isProd ? 'cheap-eval-source-map' : false,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.pug$/,
            loader: 'pug-loader'
        }, {
            test: /\.less$/,
            loader: 'vue-style-loader!css-loader!less-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }],
    },
    plugins,
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};