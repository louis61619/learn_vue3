<template>
  <div>
    <h2>Hello World</h2>
    <h2>{{ title }}</h2>
    <button @click="increment">++</button>
  </div>
</template>

<script setup>
  import { defineProps, defineEmit } from 'vue'
  const props = defineProps({
    title: {
      type: String,
      default: "HHHHHH"
    }
  })

  const emit = defineEmit(["increment"])

  const increment = () => {
    emit('increment')
  }
</script>

<style scoped>

</style>