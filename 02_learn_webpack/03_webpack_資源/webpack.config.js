const path = require('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    assetModuleFilename: "img/[name]_[hash:6][ext]"
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
      },
      // {
      //   test: /\.(png|jpe?g|svg|gif)$/,
      //   use: [
      //     {
      //       // loader: "file-loader",
      //       loader: "url-loader", // 將較小的圖片轉base64
      //       options: {
      //         // outputPath: "img",
      //         name: "img/[name]-[hash:6].[ext]",
      //         limit: 60 * 1024, //byte
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset",
        // generator: {
        //   filename: "img/[name]_[hash:6][ext]"
        // },
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024,
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "font/[name]_[hash:6].[ext]"
        //   }
        // }
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]" // 這邊文件名不需要加.
        }
      }
    ]
  }
}