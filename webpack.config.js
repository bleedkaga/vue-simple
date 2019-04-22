const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const banner = `/hello world/`
module.exports = {
    mode: 'production',
    entry: __dirname + '/src/index.js',
    output: {
        libraryExport: 'umd'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "./index.html",
            title: 'Vue title',
        }),
        new webpack.BannerPlugin({
            banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
        })
    ]
}
