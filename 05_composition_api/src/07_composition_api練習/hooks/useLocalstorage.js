import { ref, watch } from 'vue'
// 一個參數是取值 兩個參數是保存值
export default function (key, value) {
  const data =  ref(value)

  if(value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  })

  return data
}