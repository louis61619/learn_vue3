<template>
  <div>
    <h2>counter {{ counter }}</h2>
    <CounterOperation @increment="increment" @decrement="decrement" @incrementN="incrementN" />
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'
export default {
  components: {
    CounterOperation
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    incrementN(value) {
      this.counter+=value
    }
  }
}
</script>

<style>

</style>