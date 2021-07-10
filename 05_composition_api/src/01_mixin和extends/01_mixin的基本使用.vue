<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  mixins: [demoMixin],
  created() {
    console.log("Hello World");
  },
};
</script>

<style scoped></style>
