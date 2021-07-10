// 實現訂閱發布的類

class Dep {
  constructor() {
    this.subscribers = new Set() // 使用集合這樣的數據格式
  }

  addEffect(effect) { // 添加依賴 就是在數據更新時需要重新執行的函數
    this.subscribers.add(effect)
  }

  notify() { // 通知依賴更新
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

const dep = new Dep()

const info = { number: 2 }

const doubleInfo = () => {
  console.log(info.number *2)
}

// 將函數加入響應式中
dep.addEffect(doubleInfo)

info.number++

// 通知所有儲存的函數進行更新
dep.notify()

