/**
 * Created by Administrator on 2017/4/13.
 */
/**
 * Created by Administrator on 2017/3/27.
 */
const path = require('path');
const webpack = require('webpack');

const
    prodPlugins = [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: true,
            comments: false,
            warning: false
        })
    ],
    isProd = process.env.NODE_ENV === 'prod';

module.exports = {
    context: path.resolve(__dirname, './..'),
    entry: {
        main: './src/js/index.js',
        vue: 'vue'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './../dist'),
        publicPath: path.resolve(__dirname, './../dist')
    },
    devtool: isProd ? 'cheap-eval-source-map' : false,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader'],
        }, {
            test: /\.pug$/,
            use: ['pug-loader']
        }, {
            test: /\.less$/,
            use: ['vue-style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules|test/,
            use: ['babel-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }, {
            test:  /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: ['url-loader']
        }],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vue', 'menifest']
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};