<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrment">-1</button>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getHomeMultiData");
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", 100);
    },
    decrment() {
      this.$store.dispatch({
        type: "decrementAction",
      });
    },
  },
};
</script>

<style scoped></style>
