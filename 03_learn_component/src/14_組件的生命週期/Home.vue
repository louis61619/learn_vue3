<template>
  <div>
    <h2 ref="title">{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Hook"
    }
  },
  methods: {
    changeMessage() {
      this.message = "Hello OOO"
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.$refs.title.innerHTML)
  },
  updated() {
    console.log('updated', this.$refs.title.innerHTML)
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style>

</style>