<template>
<div>
  <h2 ref="title">{{ info.name }}</h2>
  <button @click="changeInfo">改變數據</button>
</div>
  
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: "Renny",
      age: 20
    })

    // 1. 傳入一個getter函數
    // watch(() => info.name, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // 2. 傳入一個響應式物件 reactive/ref 會自動進行ref的處理
    // 可以對reactive物件進行解構 返回的就會是一個普通的物件
    watch(() => {
      return {...info}
    }, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    // ref會自動進行value解包
    const name = ref('why')
    watch(name, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    const changeInfo = () => {
      info.name = "Louis"
      name.value = "Renny"
    }

    return {
      info,
      changeInfo
    }
  }
}
</script>

<style>

</style>