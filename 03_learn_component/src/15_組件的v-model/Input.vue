<template>
  <!-- <input type="text" name="" id=""> -->
  <div>
    <!-- <button @click="btnClick">按鈕</button> -->
    <!-- <input type="text" :value="modelValue" @input="btnClick"> -->

    <!-- 不能綁定到props上 -->
    <input type="text" v-model="newValue">
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
  computed: {
    newValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
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