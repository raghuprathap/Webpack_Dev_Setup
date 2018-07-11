const webpack = require('webpack')
const merge = require('webpack-merge');
const ENV = process.env.NODE_ENV;
const baseConfig = require('./webpack.base.config');
console.log("BaseConfig", baseConfig);
module.exports = merge(baseConfig, {
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    //     open: true
    // },
    devtool: 'cheap-module-source-map',
    watch: true,
    plugins: [
    new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader',},
                    {loader: 'css-loader'}
                ]
            },
        ],
    },
    mode: "development"
})