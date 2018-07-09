const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true
    },
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack demo",
        template: "./index.html"
    })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    mode: 'development'
}