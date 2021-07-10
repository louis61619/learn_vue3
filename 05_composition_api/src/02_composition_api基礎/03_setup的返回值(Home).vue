<template>
  <div>
    <!-- <h2>Home Page</h2>
    <h2>{{ message }}</h2>
    <slot></slot> -->

    <h2>{{ title }}</h2>
    <h2>當前計數: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  /**
   * props: 父組件傳遞過來的屬性
   * context: attr slot emit
   */
  props: {
    message: String,
  },
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  setup(props, context) {

    let counter = 0

    const increment = () => {
      counter++
    }

    return {
      title: "Hello Home",
      counter,
      increment
    }
  },
};
</script>

<style></style>
