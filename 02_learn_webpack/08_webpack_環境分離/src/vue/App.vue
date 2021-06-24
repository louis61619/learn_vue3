<template>
  <h2>{{ message }}</h2>
  <HelloWorld />
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "Hello Vue SFC",
    };
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>