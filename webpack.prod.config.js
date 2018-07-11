//uglifyJS
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
    
/* if (process.env.NODE_ENV !== '"production"') {
    throw new Error('Production builds must have NODE_ENV=production.');
  } */
module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[chunkhash].js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
              ]
            }
          ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        new uglifyJSPlugin({
            sourceMap: false,
        }),
        //minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
    mode: 'production'
});