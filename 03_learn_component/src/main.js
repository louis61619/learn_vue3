import { createApp } from 'vue'
// import App from './01_組件的拆分和嵌套/App.vue'
// import App from './02_組件的css作用域/App.vue'
// import App from './03_父組件傳遞子組件/App.vue'
// import App from './04_子組件傳遞父組件/App.vue'
// import App from './05_商品頁面的切換/App.vue'
// import App from './06_provide和inject的使用/App.vue'
// import App from './07_事件總線的使用/App.vue'
// import App from './08_插槽的基本使用/App.vue'
// import App from './09_具名插槽的使用/App.vue'
// import App from './10_作用域插槽的使用/App.vue'
// import App from './11_動態組件的使用/App.vue'
// import App from './12_異步組件的使用/App.vue'
// import App from './13_引用元素和組件/App.vue'
// import App from './14_組件的生命週期/App.vue'
import App from './15_組件的v-model/App.vue'


createApp(App).mount('#app')

// 只要使用import動態加載 webpack會進行代碼分包
// import('./12_異步組件的使用/utils/formate').then(res => {
//   res.sum(1, 2)
// })