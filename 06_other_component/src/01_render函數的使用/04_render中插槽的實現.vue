<script>
import { h } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  render() {
    return h(HelloWorld, null, {
      default: props => h("span", null, `slot中的內容 ${props.message}`) 
    })
  }
}
</script>

<style>

</style>