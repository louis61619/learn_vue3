<template>
  <h2>ref api</h2>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="changeAge">++</button>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: "Renny",
      age: 25
    })
    // 1.torefs將物件內所有的屬性都轉成響應ref
    // const { name, age } = toRefs(info)

    const {name} = info
    const age  = toRef(info, 'age')

    const changeAge = () => {
      age.value++
      console.log(info.age)
    }
    return {
      info,
      name,
      age,
      changeAge
    }
  }
}
</script>

<style>

</style>