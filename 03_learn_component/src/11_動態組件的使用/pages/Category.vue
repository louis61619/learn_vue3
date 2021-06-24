<template>
  <div>
    <h2>Categeries</h2>
    <h2>{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      counter: 0,
    };
  },
  emits: ["pageClick"],
  created() {
    console.log("Category create")
  },
  activated() {
    console.log("Category active")
  },
  deactivated() {
    console.log("Category deactivated")
  }
};
</script>

<style></style>
