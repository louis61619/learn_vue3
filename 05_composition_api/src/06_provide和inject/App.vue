<template>
  <div>
    <Home />
    <button @click="increment">++</button>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import { provide, ref, readonly } from 'vue'
  export default {
    components: {
      Home
    },
    setup() {
      const name = ref("coderwhy")
      let counter = ref(100)

      provide("name", readonly(name))
      provide("counter", readonly(counter))

      return {
        increment() {
          counter.value++
          console.log(counter)
        }
      }
    }
  }
</script>

<style scoped>

</style>