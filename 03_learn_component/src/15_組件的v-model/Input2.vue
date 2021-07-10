<template>
  <!-- <input type="text" name="" id=""> -->
  <div>
    <!-- <button @click="btnClick">按鈕</button> -->
    <!-- <input type="text" :value="modelValue" @input="btnClick"> -->

    <!-- 不能綁定到props上 -->
    <input type="text" v-model="newValue">
    <input type="text" v-model="newTitle">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    title: String
  },
  emits: ['update:modelValue', 'update:title'],
  computed: {
    newValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    newTitle: {
      get() {
        return this.title
      },
      set(value) {
        this.$emit('update:title', value)
      }
    }
  },
  methods: {
    btnClick($event) {
      // this.$emit('update:modelValue', $event.target.value)
    }
  }
}
</script>

<style>

</style>