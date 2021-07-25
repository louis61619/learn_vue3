import { add, mul } from './utils/math'
import { time } from './utils/format'

import axios from 'axios'

// 缺少 .d.ts 用來聲明類型的文件 可以在definitely這個第三方庫找到一些聲明文件
import lodash from 'lodash'
import jpg from './img/7bd344074a3c5fa3bc34ba73067a617e.jpeg'

console.log(add(2, 3))
console.log(mul(2, 3))

console.log(time.format(new Date()))

console.log(lodash.join(["44", "777"]))


// 做類型聲明可以獲取外部變數
console.log(myName)

foo()

const p = new Person("Renny", 26)
console.log(p.name)