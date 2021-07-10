<template>
  <div class="app">
    <input type="number" v-model="counter" step="100">
    <h2>{{ showCounter.toFixed(0) }}</h2>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  components: {
  },
  data() {
    return {
      counter: 200,
      showCounter: 0
    };
  },
  computed: {
    // showCounter: {
    //   get() {
    //     return this.counter
    //   },
    //   set() {

    //   }
    // }
  },
  watch: {
    // counter(newValue) {
    //   console.log(newValue)
    //   // 通過gsap這個庫給this物件裡面的一個屬性賦值
    //   gsap.to(this, {duration: 1, showCounter: newValue})
    // }
    counter: {
      handler(newValue) {
        gsap.to(this, {duration: 1, showCounter: newValue})
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.app {
  text-align: center;
  height: 300px;
  overflow: hidden;
}

.title {
  /* margin: 20px auto;
  width: 200px; */
  display: inline-block;
}

</style>
