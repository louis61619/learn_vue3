const path = require('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     // {loader: "css-loader", option: {}}
      //     "style-loader",
      //     "css-loader",
      //     {
      //       loader: "postcss-loader",
      //       // options: {
      //       //   postcssOptions: {
      //       //     plugins: [
      //       //       require('autoprefixer')
      //       //     ]
      //       //   }
      //       // }
      //     },
      //   ],
      // },
      // {
      //   test: /\.less$/, // /\.less$/i表示忽略大小寫
      //   use: [
      //     // {loader: "css-loader", option: {}}
      //     "style-loader",
      //     "css-loader",
      //     "less-loader"
      //   ],
      // },
      {
        test: /\.less|css$/, // 同時匹配兩者
        use: [
          // {loader: "css-loader", option: {}}
          "style-loader",
          "css-loader",
          "less-loader",
          "postcss-loader",
        ],
      }
    ]
  }
}