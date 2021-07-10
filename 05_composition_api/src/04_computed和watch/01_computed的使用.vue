<template>
  <h2>{{ fullname }}</h2>
  <button @click="changeName">修改姓氏</button>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstname = ref('HSIEH')
    const lastname = ref('Louis')

    // 用法1. 傳入一個getter函數
    // const fullname = computed(() => {
    //   return firstname.value + " " + lastname.value
    // })

    // 用法2 傳入一個物件 物件可以包含getter和setter
    const fullname = computed({
      get() {
        return firstname.value + " " + lastname.value
      },
      set(newValue) {
        const names = newValue.split(" ")
        firstname.value = names[0]
        lastname.value = names[1]
      }
    })

    console.log(fullname)

    const changeName = () => {
      // firstname.value = "88888888"
      fullname.value = "coder why"
    }
    return {
      firstname,
      lastname,
      fullname,
      changeName
    }
  }
}
</script>

<style>

</style>