<template>
  <h2>Home:{{ $store.state.counter }}</h2>
  <h2>HomeUseState: {{ counter }}</h2>
  <h2>{{ name }}</h2>
  <h2>sCounter: {{ sCounter }}</h2>
</template>

<script>
import { useState } from "../hooks/useState";

export default {
  setup() {
    // const { name, counter } = useState(["name", "counter"]);
    const storeState = useState(["name", "counter"]);
    const storeState2 = useState({
      sCounter: (state) => state.counter,
    });
    return {
      // name,
      // counter,
      ...storeState,
      ...storeState2,
    };
  },
};
</script>

<style scoped></style>
