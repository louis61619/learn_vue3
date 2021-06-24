const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { merge } = require('webpack-merge')
const commonconfig = require('./webpack.common.js')


module.exports = merge(commonconfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public", // 會自動從根路徑
          // to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
  ]
})