<template>
  <div>
    <button @click="isShow = !isShow">切換</button>
    <Home v-if="isShow" />
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  data() {
    return {
      isShow: true
    }
  },
}
</script>

<style>

</style>