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
    resolve:{
        alias:{
            '@Components':path.resolve(__dirname,"./src/components"),
            '@Core':path.resolve(__dirname,"./src/core"),
            "@Assets":path.resolve(__dirname,"./src/assets"),
            "@Ultis":path.resolve(__dirname,"./src/utils"),
        }
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
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
              { test: /\.(woff|woff2|eot|ttf)$/,
                use:[
                    {loader: 'url-loader?limit=100000'}
                ]
                 }
        ]
    },



    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: false,
    })],
    target: 'web',

}
