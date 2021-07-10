<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <h2>Home:{{ counter }}</h2>
  <button @click="addTen(10)">+10</button>
</template>

<script>
import { mapState } from "vuex";
import { INCREMENT_N } from "../store/mutation-types";

export default {
  computed: {
    ...mapState({
      counter: (state) => state.counter,
    }),
  },
  methods: {
    addTen(n) {
      // this.$store.commit("incrementN", { n });
      // 其他提交風格
      console.log(n);
      this.$store.commit({
        type: INCREMENT_N,
        n,
      });
    },
  },
};
</script>

<style scoped></style>
