<template>
  <div>
    <h2 v-formate-time="'YYYY-MM-DD'">{{ timestamp }}</h2>
    <h2 v-formate-time>{{ timestamp }}</h2>
    <h2 v-formate-time="'YYYY/MM/DD'">{{ timestamp }}</h2>
  </div>
</template>

<script>
  export default {
    setup() {
      const timestamp = new Date().valueOf()

      return {
        timestamp
      }
    }
  }
</script>

<style scoped>

</style>