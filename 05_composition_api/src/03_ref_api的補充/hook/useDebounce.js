import {customRef} from 'vue'

export default function(value, delay=1000) {

  let timer = null

  return customRef((track, trigger) => {
    return {
      get() {
        track() // 收集依賴
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() // 觸發更新
        }, delay)
      }
    }
  })
}