<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <h2>Home:{{ counter }}</h2>
  <!-- <button @click="addTen(10)">+10</button> -->
  <button @click="INCREMENT_N({ n: 5 })">+5</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { INCREMENT_N } from "../store/mutation-types";

export default {
  computed: {
    ...mapState({
      counter: (state) => state.counter,
    }),
  },
  // methods: {
  //   ...mapMutations([INCREMENT_N]),
  //   addTen(n) {
  //     this[INCREMENT_N]({ n });
  //   },
  // },
  setup() {
    return {
      ...mapMutations([INCREMENT_N]),
    };
  },
};
</script>

<style scoped></style>
