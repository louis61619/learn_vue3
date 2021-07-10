


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
    const name = ref("RRRRRR")

    // 2. 傳入一個響應式物件 reactive/ref 會自動進行ref的處理
    // 可以對reactive物件進行解構 返回的就會是一個普通的物件
    watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName)
    })


    const changeInfo = () => {
      info.name = "Louis"
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