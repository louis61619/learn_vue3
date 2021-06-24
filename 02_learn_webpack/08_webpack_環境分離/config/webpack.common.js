const path = require('path')

const HtmlWepbakcPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack');

const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: "web", // 為了什麼環境而進行打包的 EX: node、web
  
  // source-map，建立開發文件方便調適
 
  entry: "./src/main.js", // 會自動從根目錄查找
  // watch: true, // 監聽文件修改
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js",
    assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  
  resolve: { // 如何對模塊的路徑進行解析
    // modules: ["node_modules"]
    extensions: [".wasm", ".mjs", ".js", ".json", ".vue"], // 默認
    // mainFiles: ["index"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "js": path.resolve(__dirname, "../src/js")
    }
  },
  module: {
    rules: [
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
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWepbakcPlugin({
      template: "public/index.html", // 會自動從跟路徑
      title: "哈哈哈"
    }),
    new DefinePlugin({ // 定義模板變數
      BASE_URL: "'../'",
      __VUE_OPTIONS_API__: true, // 如果為false，使用tree shaking將這部分代碼去掉
      __VUE_PROD_DEVTOOLS__: false // 生產環境開不開起dev tool
    }),
    
    new VueLoaderPlugin()
  ]
}