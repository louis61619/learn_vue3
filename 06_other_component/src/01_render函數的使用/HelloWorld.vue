
<script>
import { h } from 'vue'
export default {
  render() {
    return h("div", null, [
      h('h2', null, "Hello World"),
      this.$slots.default? this.$slots.default({message: "我是從子組件傳過去的參數"}): h('span', null, "我是插槽的默認值")
    ])
  }
}
</script>

<style>

</style>