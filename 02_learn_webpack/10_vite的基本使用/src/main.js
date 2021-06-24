import {sum} from './js/math.js'

import { createApp } from 'vue'
import App from './vue/App.vue'

// 需要透過es模塊的方式進行載入
import _ from 'lodash-es'
import './css/style.css'

import { mul } from './ts/math'

console.log(sum(1, 2))
console.log(_.join(["i", "p"]))

console.log(mul(2, 3))

const app = createApp(App)

app.mount('#app')