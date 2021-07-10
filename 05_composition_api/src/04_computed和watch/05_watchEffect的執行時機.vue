<template>
<div>
  <h2 ref="title">Hello Ref</h2>
</div>
  
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const title = ref(null)

    // console.log(title)

    watchEffect(() => {
      console.log(title.value)
    }, {
      // 等待dom掛載完畢時執行
      flush: "post"
    })

    return {
      title
    }
  }
}
</script>

<style>

</style>