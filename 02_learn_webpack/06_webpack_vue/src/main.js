import { sum } from './js/math';
import { createApp } from 'vue'
import App from './vue/App.vue'

console.log(sum(1, 2))


// vue要將代碼進行解析
// 幾種方式
// 1.vue.globel.js 透過script標籤導出一個全局vue實例
// 2.vue.esm-browser.js 透過script module標籤導出一個全局vue實例
// 3.vue.esm-bundle.js 構件工具中使用會是這個
// 4.vue.cjs.js 用於服務端渲染(SSR)時使用
// 都有runtime版本 runtime版本中不包含template的運行時compiler npm導出的默認版本是沒有runtime的

// vue編寫DOM有幾種方式
// template: 需要透過運行時的compiler進行解析
// render: 透過render函數進行渲染返回一個vnode
// .vue文件中預先編譯template(透過vue-loader)

// .vue文件要使用vue-loader進行處理 vue3用vue-loader@next
// 依賴vue-template-complier進行預先編譯 vue3用@vue/compiler-sfc
// 還需要配置一個plugin

// const app = createApp({
//   template: '<h2>Hello Vue</h2>',
//   data() {
//     return {
//       title: "Hello Vue"
//     }
//   },
// })


const app = createApp(App)
app.mount('#app')