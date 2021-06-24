<template>
  <!-- <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">獲取父組件</button>
  </div> -->
  <h2>NavBar</h2>
    <button @click="getParentAndRoot">獲取父組件</button>
</template>

<script>
export default {
  data() {
    return {
      message: "navbar message",
    };
  },
  methods: {
    sayHello() {
      console.log("Hello");
    },
    getParentAndRoot() {
      console.log(this.$parent.message);
      console.log(this.$root.message);
    },
  },
};
</script>

<style></style>
