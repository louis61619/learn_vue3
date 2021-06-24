<template>
  <div>
    <NavBar ref="navbar" />
    <div ref="title">8888</div>
    <button @click="getElement">獲取元素</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      message: "parent and root"
    }
  },
  methods: {
    getElement() {
      // console.log(this.$refs.title)
      // console.log(this.$refs.navbar.message)
      // this.$refs.navbar.sayHello()

      console.log(this.$refs.navbar.$el)
    }
  }
}
</script>

<style>

</style>