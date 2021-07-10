<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <!-- <Input v-model="message" /> -->
    <!-- 如果在組件上使用v-model相當於綁定了一個modelValue的屬性 以及一個事件update:model-value -->
    <!-- <Input :model-value="message" @update:model-value="message = $event" /> -->

    <!-- 綁定兩個以上v-model -->
    <Input2 v-model:title="title" v-model="message"  />
    <h2>{{message}}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import Input from './Input.vue'
import Input2 from './Input2.vue'
export default {
  components: {
    Input,
    Input2
  },
  data() {
    return {
      message: "Hello v-model",
      title: "Hello title"
    }
  },
}
</script>

<style>

</style>