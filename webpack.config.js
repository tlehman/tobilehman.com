const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static/js/amplify/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
