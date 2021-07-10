<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="itemClick">按鈕</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  mixins: [demoMixin],
  created() {
    // mixin中的生命週期會優先執行
    console.log("Hello World");
  },
  data() {
    return {
      // mixin中組件定義的data會優先保留
      message: "888888888888"
    }
  },
  methods: {
    itemClick() {
      // 組件中的屬性優先
      console.log("組件")
    }
  }
};
</script>

<style scoped></style>
