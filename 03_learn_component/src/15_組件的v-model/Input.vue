<template>
  <!-- <input type="text" name="" id=""> -->
  <div>
    <button @click="btnClick">按鈕</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  methods: {
    btnClick() {
      this.$emit('update:modelValue', "999999")
    }
  }
}
</script>

<style>

</style>