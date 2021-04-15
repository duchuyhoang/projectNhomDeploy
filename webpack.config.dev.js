var webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        path: path.join(__dirname, "/src"),
        filename: "bundle.js",
        clean:true
    },

devServer:{
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, '/src'),
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
    compress: true,
    port:3000,

},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],

            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                    loader: 'file-loader',
                }
                ,]
            }

        ]
    },



    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: false,
    })],
    target: 'web',

}
