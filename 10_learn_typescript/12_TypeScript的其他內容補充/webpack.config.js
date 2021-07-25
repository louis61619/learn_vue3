const path = require("path");
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: { // webpack本身需要依賴js所以都要加入
    extensions: ['.ts', ".js", "cjs", "json"]
  },
  plugins: [
    new htmlPlugin({
      template: "./index.html"
    }),
  ],
  devServer: {}
};
