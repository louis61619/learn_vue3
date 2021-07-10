<template>
  <input type="text" v-model="message">
  <h2>{{ message }}</h2>
</template>

<script>
import debounceRef from './hook/useDebounce'
export default {
  setup() {
    const message = debounceRef('Hello CustomRef')

    return {
      message
    }
  }
}
</script>

<style>

</style>