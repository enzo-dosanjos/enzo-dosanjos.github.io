const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "/src/index.js", // main js
    output: {
        path: path.resolve(__dirname, "dist"), // output folder
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader", // for styles
                ],
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // base html
        }),
    ],
};