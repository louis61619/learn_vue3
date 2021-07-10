// 實現訂閱發布的類
// vue2中訂閱的是物件中的屬性 改變時發布給有依賴的函數
class Dep {
  constructor() {
    this.subscribers = new Set() // 使用集合這樣的數據格式
  }

  // addEffect(effect) { // 添加依賴 就是在數據更新時需要重新執行的函數
  //   this.subscribers.add(effect)
  // }
  
  depend() {
    if(activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  notify() { // 通知依賴更新
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}



// 透過watchEffect這個函數加入dep的依賴中
// effect不作為參數的好處是外部變數只會有唯一一個
let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect() // 第一次自動執行
  activeEffect = null
}


// 一般的map中key是一個字符串
// weakmap中的key是一個物件 並且是弱引用的 意思是當key賦值為null時 這個key和對應的value都會被取消掉(垃圾回收)
// 用weakmap是要將對應的原始數據做為key
const targetMap = new WeakMap()
function getDep(target, key) {

  // 跟據傳入的target(原始data數據)作為key取targetMap中的dep集合
  let depsMap = targetMap.get(target)
  if(!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 從dep集合中取出key對應的dep
  let dep = depsMap.get(key)
  if(!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}


// 透過reactive函數進行數據劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // console.log(target, key)
      const dep = getDep(target, key)
      dep.depend()
      // console.log('獲取', dep)
      return target[key]  // proxy中target物件並非原物件 所以不會照成循環引用的問題
    },
    set(target, key, newValue) {

      const dep = getDep(target, key)

      // console.log('劫持', targetMap)
      target[key] = newValue
      dep.notify()
    }
  })
  
}


// 測試代碼

// const info = reactive({ number: 2 })
// // const myInfo = reactive({ name: "Renny" })

// // // 將函數加入響應式中
// watchEffect(function doubleInfo() {
//   console.log("info effect", info.number *2)
// })

// watchEffect(function doubleInfo() {
//   console.log(myInfo)
//   console.log("myInfo effect", myInfo.name)
// })



// myInfo.name = "Louis"

// setTimeout(() => {
//   console.log('---------')
//   info.number++
// }, 1000)

