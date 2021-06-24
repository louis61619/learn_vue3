<template>
  <!-- <ShowMessage title="哈哈哈" content="888888888" />
  <ShowMessage title="哈哈哈2" content="888888888" />
  <ShowMessage title="哈哈哈3" content="888888888" />
  <ShowMessage v-bind="message" /> -->
  <ShowMessage class="aaa"  id="8888" />
  <MultiRootEl id="mmm" />
</template>

<script>
import ShowMessage from './ShowMessage.vue'
import MultiRootEl from './MultiRootEl.vue'
export default {
  components: {
    ShowMessage,
    MultiRootEl
  },
  data() {
    return {
      message: {
        title: "哈哈ㄏ哈88",
        content: "99999999999"
      }
    }
  }
}
</script>

<style>

</style>