<template>
  <div>
    <!-- <h2>Home Page</h2>
    <h2>{{ message }}</h2>
    <slot></slot> -->

    <h2>{{ title }}</h2>
    <h2>當前計數: {{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

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

    const state = reactive({
      counter: 0
    })

    const increment = () => {
      state.counter++
    }

    return {
      title: "Hello Home",
      state,
      increment
    }
  },
};
</script>

<style></style>
