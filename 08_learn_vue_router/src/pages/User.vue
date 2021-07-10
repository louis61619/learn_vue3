<template>
  <div>
    <h2>user</h2>
    <h2>{{ username }}</h2>
    <h2>{{ name }}-{{ id }}</h2>
  </div>
</template>

<script>
  import { watch, ref } from 'vue'
  import { useRoute } from 'vue-router'
  export default {
    created() {
      // console.log(this.$route)
    },
    data() {
      return {
        username: this.$route.params.name,
        id: this.$route.params.id
      }
    },
    setup() {
      const route = useRoute()
      const id = ref(route.params.id)
      const name = ref(route.params.name)

      watch(route, (newValue) => {
        id.value = newValue.params.id
        name.value = newValue.params.name
      })
      return {
        name,
        id 
      }
    }
  }
</script>

<style scoped>

</style>