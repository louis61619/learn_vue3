<template>
  <div>
    <h2>Home Page</h2>
    <h2>{{ message }}</h2>
    <slot></slot>

    <h2>{{ title }}</h2>
    <h2>當前計數: {{ counter }}</h2>
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
  data() {
    return {
      counter: 0
    }
  },
  setup(props, context) {
    console.log(props);
    // 屬性
    console.log(context.attrs);
    // 插槽
    console.log(context.slots);
    // 事件
    console.log(context.emit);

    return {
      title: "Hello Home"
    }
  },
};
</script>

<style></style>
