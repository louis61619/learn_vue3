import { createApp } from 'vue'
// import App from './01_mixin和extends/App.vue'
// import App from './02_composition_api基礎/App.vue'
// import App from './03_ref_api的補充/App.vue'
// import App from './04_computed和watch/App.vue'
// import App from './05_生命週期鉤子/App.vue'
// import App from './06_provide和inject/App.vue'
// import App from './07_composition_api練習/App.vue'
import App from './08_setup頂層的編寫方式/App.vue'

const app = createApp(App)

// 全局混入
// app.mixin({
//   created() {
//     console.log("全局mixin")
//   }
// })

app.mount('#app')
