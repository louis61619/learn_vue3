<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <Input v-model="message" />
    <!-- 如果在組件上使用v-model相當於綁定了一個modelValue的屬性 -->
    <!-- <Input :model-value="message" @update:model-value="message = $event" /> -->
    <h2>{{message}}</h2>
  </div>
</template>

<script>
import Input from './Input.vue'
export default {
  components: {
    Input
  },
  data() {
    return {
      message: "Hello v-model"
    }
  },
}
</script>

<style>

</style>