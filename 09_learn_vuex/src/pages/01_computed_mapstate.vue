<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <h2>Home:{{ counter }}</h2>
  <h2>{{ sCounter }}</h2>
</template>

<script>
import { mapState } from "vuex";

// console.log(mapState(["counter"]).counter);
const sCounter = () => {
  return 1000;
};
export default {
  computed: {
    // sCounter() {
    //   return this.$store.state.counter;
    // },
    sCounter,
    // ...mapState(["counter"]),
    ...mapState({
      counter: (state) => state.counter,
    }),
  },
};
</script>

<style scoped></style>
