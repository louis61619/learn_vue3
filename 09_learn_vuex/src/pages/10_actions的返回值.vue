<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <button @click="incrementAction">+1</button>
  <button @click="decrementAction">-1</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    const promsie = this.$store.dispatch("getHomeMultiData");
    promsie.then((res) => {
      console.log(res);
    });
  },
  methods: {
    // ...mapActions(["getHomeMultiData", "incrementAction", "decrementAction"]),
    ...mapActions({
      add: "incrementAction",
      sub: "decrementAction",
    }),
    increment() {
      this.$store.dispatch("incrementAction", 100);
    },
    decrment() {
      this.$store.dispatch({
        type: "decrementAction",
      });
    },
  },
  setup() {
    return {
      ...mapActions(["getHomeMultiData", "incrementAction", "decrementAction"]),
    };
  },
};
</script>

<style scoped></style>
