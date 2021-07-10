import dayjs from 'dayjs'

export default function regersiterFormateTime(app) {
  return app.directive("formate-time", {
    created(el, binding) { // 數據先在created中做初始化 並加入binding
      binding.formateString = binding.value || 'YYYY-MM-DD HH:mm:ss'
    },
    mounted(el, binding) {
      const textContent = el.textContent
      const timestamp = parseInt(textContent)
      if(timestamp.length === 10) { // 10位數字是秒鐘要轉成毫秒
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format(binding.formateString) // HH是24小時制
    }
  })
}