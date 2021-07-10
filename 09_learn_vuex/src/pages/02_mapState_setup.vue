<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <!-- <h2>{{ sCounter }}</h2> -->
  <h2>{{ name }}</h2>
</template>

<script>
import { mapState, useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    // const sCounter = computed(() => store.state.counter);

    // console.log();

    // const sCounter = computed(
    //   mapState(["counter"]).counter.bind({ $store: store })
    // );

    const storeStateFn = mapState(["counter", "name"]);
    let storeState = {};
    Object.keys(storeStateFn).forEach((fnkey) => {
      const fn = storeStateFn[fnkey].bind({ $store: store });
      storeState[fnkey] = computed(fn);
    });

    return {
      // sCounter,
      ...storeState,
    };
  },
};
</script>

<style scoped></style>
