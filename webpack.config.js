const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = (env, argv) => {
    return  (argv.mode === "production")
        ? prod
        : dev;
}

const dev = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        hot: true,
        open: true,
        port: 5003,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: "styles.css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                },
                {
                    from: "./src/config.json",
                    to:"./config.json"
                },
            ]
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
}

const prod = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: "styles.[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                }, {
                    from: "./src/config.json",
                    to:"./config.json"
                },
            ]
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "..."
        ]
    }
}