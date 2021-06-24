import { sum } from 'js/math';
import { createApp } from 'vue'
import App from './vue/App'

console.log(sum(1, 2))


// 模塊熱替換
import './js/element'
if(module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element模塊熱替換')
  })
}

const app = createApp(App)
app.mount('#app')

console.log('----')