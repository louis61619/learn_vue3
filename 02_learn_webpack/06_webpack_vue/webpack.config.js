const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWepbakcPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: "development",
  // source-map，建立開發文件方便調適
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
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
      },
      {
        test: /\.js$/,
        // use: {
        //   loader: "babel-loader",
        //   // options: {
        //   //   // plugins: [
        //   //   //   "@babel/plugin-transform-arrow-functions",
        //   //   //   "@babel/plugin-transform-block-scoping"
        //   //   // ]
        //   //   presets: [
        //   //     "@babel/preset-env"
        //   //     // ["@babel/preset-env". {}]
        //   //   ]
        //   // }
        // }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWepbakcPlugin({
      template: "public/index.html",
      title: "哈哈哈"
    }),
    new DefinePlugin({ // 定義模板變數
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true, // 如果為false，使用tree shaking將這部分代碼去掉
      __VUE_PROD_DEVTOOLS__: false // 生產環境開不開起dev tool
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          // to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}