<template>
  <div>
    <h2>Login</h2>
    <button @click="btnClick">Login</button>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()

      const btnClick = () => {
        window.localStorage.setItem('token', 48646468468)
        router.push('/home')
      }

      return {
        btnClick
      }
    }
  }
</script>

<style scoped>

</style>