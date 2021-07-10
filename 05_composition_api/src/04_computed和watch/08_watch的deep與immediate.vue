


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
      age: 20,
      friends: {
        name: "kobe"
      }
    })
    const name = ref("RRRRRR")

    // 一般的reactive物件默認是深度偵聽
    watch(() => ({...info}), (newInfo, oldInfo) => {
      console.log(newInfo, oldInfo)
    }, {
      deep: true,
      immediate: true
    })


    const changeInfo = () => {
      info.friends.name = "Louis"
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