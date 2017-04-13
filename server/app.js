/**
 * Created by Administrator on 2017/4/13.
 */
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.config.devserver');

const compiler = webpack(webpackConfig);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    index: 'index.html',
    stats: {
        color: true,
        chunks: false
    }
});
const app = express();
app.use(function(req, res, next) {
    console.log('STARTING DEV SERVER');
    next();
});

app.use(devMiddleware);

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});