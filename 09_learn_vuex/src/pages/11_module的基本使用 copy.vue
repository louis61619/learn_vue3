<template>
  <h2>Home: {{ $store.state.home.homeCounter }}</h2>
  <button @click="increment">home+1</button>
  <button @click="decrement">home-1</button>
  <button @click="incrementAction">home action +1</button>
  <!-- <h2>doubleHomeCounter: {{ $store.getters.doubleHomeCounter }}</h2> -->
  <h2>doubleHomeCounter: {{ $store.getters["home/doubleHomeCounter"] }}</h2>
  <hr />
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("home/increment");
    },
    decrement() {
      this.$store.commit("home/decrement");
    },
    incrementAction() {
      this.$store.dispatch("home/incrementAction");
    },
  },
};
</script>

<style scoped></style>
