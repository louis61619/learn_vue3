<template>
  <MySlotCpn>
    <button>我是按鈕</button>
  </MySlotCpn>

  <MySlotCpn>
    <!-- <MyButton /> -->
  </MySlotCpn>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue'
import MyButton from './MyButton.vue'
export default {
  components: {
    MySlotCpn,
    MyButton
  }
}
</script>

<style>

</style>