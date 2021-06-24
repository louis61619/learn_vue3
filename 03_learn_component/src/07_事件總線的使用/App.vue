<template>
  <Home />
  <About />
  <button @click="add">arr+1</button>
</template>

<script>
import Home from "./Home.vue";
import About from './About.vue'
import { computed } from "vue";

export default {
  provide() {
    return {
      name: "Renny",
      age: 18,
      length: computed(() => this.names.length), // 返回一個ref物件 真正的值保存在value中
    };
  },
  components: {
    Home,
    About
  },
  data() {
    return {
      names: [1, 2, 3],
    };
  },
  methods: {
    add() {
      this.names.push(4);
      console.log(this.names);
    },
  },
};
</script>

<style></style>
