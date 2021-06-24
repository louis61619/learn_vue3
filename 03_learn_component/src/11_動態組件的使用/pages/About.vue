<template>
  <h2>About</h2>
  <h2>{{ name }}</h2>
  <button @click="buttonClick">------</button>
</template>

<script>
export default {
  props: {
    name: String
  },
  emits: ["pageClick"],
  methods: {
    buttonClick() {
      this.$emit('pageClick')
    }
  }
}
</script>

<style>

</style>