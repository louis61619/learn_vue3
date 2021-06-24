<template>
  <h2>Hello Color</h2>
  <HelloWorld />
  
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>