<template>
  <div>
    <button @click="increment"> +1 </button>
    <button @click="decrement"> -1 </button>

    <input type="text" v-model.number="value">
    <button @click="incrementN"> +n </button>
  </div>
</template>

<script>
export default {
  // vue3中會先註冊事件
  emits: ["increment", "decrement", "incrementN"],

  // 物件寫法的目的是進行驗證
  emits: {
    increment: null,
    decrement: null,
    incrementN: payload => { // 可以對參數進行驗證並返回true
      console.log(payload)
      if(payload > 10) {
        return false
      }
      return true
    }
  },

  data() {
    return {
      value: 1
    }
  },
  methods: {
    increment() {
      this.$emit("increment")
    },
    decrement() {
      this.$emit("decrement")
    },
    incrementN() {
      this.$emit('incrementN', this.value)
    }
  }
}
</script>

<style>

</style>