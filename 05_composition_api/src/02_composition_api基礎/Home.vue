


<template>
  <div>
    <h2>{{ readonlyInfo.name }}</h2>
    <h2>{{ readonlyInfo2.name }}</h2>
    <h2>{{ readonlyInfo3 }}</h2>
    <button @click="updateState">修改狀態</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue'

export default {
  /**
   * props: 父組件傳遞過來的屬性
   * context: attr slot emit
   */
  props: {
    message: String,
  },
  setup(props, context) {

    // 1. 普通物件
    const info01 = {
      name: "Renny"
    }
    const readonlyInfo = readonly(info01)

    // 2.響應式物件
    const info2 = reactive({
      name: "Renny2"
    })
    const readonlyInfo2 = readonly(info2)

    // 3.ref物件
    const info3 = ref("Renny3")
    const readonlyInfo3 = readonly(info3)

    const updateState = () => {
      readonlyInfo.name = "XXXXX"
      readonlyInfo2.name = "xxxxx"
      readonlyInfo3.value = "xxxxx"
    }

    return {
      readonlyInfo,
      readonlyInfo2,
      readonlyInfo3,
      updateState
    }
  },
};
</script>

<style></style>
