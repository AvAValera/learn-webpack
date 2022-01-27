const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const webpack = require("webpack");
module.exports = {
    entry: {
        main: [ "./src/index.jsx"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/js/bundle.js",
    },
    mode: "development",
    devServer: {
        hot: true,
        port: 3000,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin(),
        
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '/img/[path]/[name].[ext]',
                    }
                }
                
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
                resolve: {
                    extensions: ["js", ".jsx"],
                }
            },
        ],
    },
};
