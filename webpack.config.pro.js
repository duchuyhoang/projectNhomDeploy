var webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "production",
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js",
        publicPath: "/build",
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
                    options: {
                        name: '[path][name].[hash].[ext]',
                      },
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
