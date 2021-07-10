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
    targetMap.set(depsMap)
  }

  // 從dep集合中取出key對應的dep
  let dep = depsMap.get(key)
  if(!dep) {
    dep = new Dep()
    depsMap.set(dep)
  }

  return dep
}


// 透過reactive函數進行數據劫持
// 不太懂為什麼不能直接用obj[key]的方式修改 如果使用原始物件修改會形成循環引用
function reactive(raw) {
  Object.keys(raw).forEach(key => {

    // dep對象應該是做為dep集合中的一部分，dep集合為更大的targetMap中的一部分， 透過不同的依賴建立不同的dep對象
    const dep = getDep(raw, key)
    let value = raw[key]

    Object.defineProperty(raw , key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        if(value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })

  return raw
}


// 測試代碼

const info = reactive({ number: 2 })
const myInfo = reactive({ name: "Renny" })

// 將函數加入響應式中
watchEffect(function doubleInfo() {
  console.log("info effect", info.number *2)
})

watchEffect(function doubleInfo() {
  console.log(myInfo)
  console.log("myInfo effect", myInfo.name)
})


info.number++
myInfo.name = "Louis"

console.log(myInfo)

