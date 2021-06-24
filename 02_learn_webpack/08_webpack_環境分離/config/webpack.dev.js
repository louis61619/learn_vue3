const { merge } = require('webpack-merge')

const commonconfig = require('./webpack.common.js')

module.exports = merge(commonconfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./public", // 靜態資源存放路徑 通常是./public 偵測這邊做改變的話畫面重新渲染
    // hot: true,
    // host: 0.0.0.0, // 0.0.0.0可以被別的主機訪問
    port: 8000,
    open: true,
    // compress: true // 啟用gzip壓縮
    // proxy: { // webpack網路請求代理
    //   // "/api": "http://example.com:8888"
    //   "/api": {
    //     target: "http://example.com:8888",
    //     pathRewrite: { // 對路徑進行重寫
    //       "^/api": ""
    //     },
    //     secure: false, // false為webpack代理無視後端服務為https並無證書的情況
    //     changeOrigin: true, // 修改header請求頭url來源地址
    //   }
    // }
  },
})