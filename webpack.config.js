const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/menu.html",
      filename: "menu.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      filename: "contact.html"
    }),
  ],
    devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  stats: {
    children: true,
  },
};