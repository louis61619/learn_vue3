<template>
  <h2>HomeContent-{{name}}-{{age}}-{{length.value}}</h2>
  <h2>{{ foo }}</h2>
</template>

<script>
import emitter from './eventbus'
export default {
  inject: ["name", "age", "length"],
  data() {
    return {
      foo: "no change"
    }
  },
  mounted() {
    emitter.on('foo', () => {
      this.foo = "is change"
    })

    // 監聽所有事件 會有兩個參數
    emitter.on('*', (type, info) => {
      console.log(type, info)
    })
  },
  beforeUnmount() {
    // 取消所有監聽
    // emitter.all.clear()
    
    emitter.off('foo')
  }
}
</script>

<style>

</style>