<template>
  <h2>About</h2>
  <button @click="buttonClick">按鈕點擊</button>
</template>

<script>
import emmiter from './eventbus'

export default {
  methods: {
    buttonClick() {
      emmiter.emit('foo')
    }
  }
}
</script>

<style>

</style>