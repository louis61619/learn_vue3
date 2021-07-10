


<template>
  <h2>{{ name }}-{{ age }}</h2>
  <button @click="changeName">修改name</button>
  <button @click="changeAge">修改age</button>
</template>

<script>

import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const name = ref("why")
    const age = ref(18)

    const changeName = () => {
      name.value = "AAAAA" 
    }

    const changeAge = () => {
      age.value++
      // if(age.value === 25) {
      //   stop()
      // }
    }

    // 自動收集依賴變化 所以第一次會默認調用 返回一個函數可以調用停止偵聽
    const stop = watchEffect((onInvalidate) => {
      console.log(name.value, age.value)

      const timer = setTimeout(() => {
        console.log("網路請求成功")
      }, 2000)

      // 根據name和value這兩個參數發送網路請求
      // 透過一個函數取消副作用
      onInvalidate(() => {
        console.log('onInvalidate')
        clearTimeout(timer)
      })
    })


    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style>

</style>