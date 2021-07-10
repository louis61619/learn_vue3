<template>
  <div>
    <h2>{{ $store.getters.totalCounterGreateN(7) }}</h2>
    <!-- <h2>{{ totalCounterGreateN(7) }}</h2> -->
    <h2>{{ totalCounterGreateN(2) }}</h2>
  </div>
</template>

<script>
import { useGetters } from "../hooks/useGetters";
export default {
  setup() {
    const storeGetters = useGetters(["totalCounterGreateN"]);

    return {
      ...storeGetters,
    };
  },
};
</script>

<style scoped></style>
