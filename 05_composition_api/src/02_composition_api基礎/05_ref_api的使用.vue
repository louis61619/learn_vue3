<template>
  <div>
    <!-- <h2>Home Page</h2>
    <h2>{{ message }}</h2>
    <slot></slot> -->

    <h2>{{ title }}</h2>
    <!-- 在template中使用ref物件會自動進行解包 -->
    <h2>當前計數: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

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

    // counter 變成ref可響應式的引用
    const counter = ref(0)

    const increment = () => {
      counter.value++
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