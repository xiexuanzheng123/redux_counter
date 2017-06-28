var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        hmr: [
            'webpack-hot-middleware/client?reload=true'
        ],
        index: [
            './counter/index'
        ]
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Redux',
            filename: 'bulid/redux.html',
            template: './index.html',
            inject: 'body',
            hash: true,
            chunks: ['index']
        })
        // ,
        // new ExtractTextPlugin(
        //     ['./counter/css/bootstrap.css']
        // )
    ]
}