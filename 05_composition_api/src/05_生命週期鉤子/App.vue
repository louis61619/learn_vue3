<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">++</button>
  </div>
</template>

<script>
import { onMounted, onUpdated ,onUnmounted, ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value++
    }

    onMounted(() => {
      console.log("App onMounted")
    })

    onUpdated(() => {
      console.log("App onUpdated")
    })

    onUnmounted(() => {
      console.log("App onUnmounted")
    })

    return {
      counter,
      increment
    }
  }
}
</script>

<style>

</style>