<template>
  <h2>組件開始</h2>
  <slot>
    <h2>我是默認元素</h2>
  </slot>
  <slot>
    <h2>我是默認元素</h2>
  </slot>
  <slot>
    <h2>我是默認元素</h2>
  </slot>
  <h2>組件結束</h2>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue'
export default {
  components: {
    MySlotCpn
  }
}
</script>

<style>

</style>