<template>
  <div>
    <h2>{{ $store.getters.totalCounterGreateN(7) }}</h2>
    <!-- <h2>{{ totalCounterGreateN(7) }}</h2> -->
    <h2>{{ total(2) }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["totalCounterGreateN"]),
    ...mapGetters({
      total: "totalCounterGreateN",
    }),
  },
};
</script>

<style scoped></style>
