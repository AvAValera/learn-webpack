const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/img/'),
        },
    },
    entry: {
        main: [ "./src/index.jsx"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "static/js/main.[hash].js",
    },
    mode: "development",
    devServer: {
        hot: true,
        port: 3000,
        host: "localhost",
        static: './src',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.[contenthash].css',
        }),
        // new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/img'),
                    to: path.resolve(__dirname, 'build/img')
                }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 
                    "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'img/[path]/[name].[ext]',
                        
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
