<template>
  <div>
    <teleport to="#why">
      <div>HHHHH</div>
      <HelloWorld />
    </teleport>

    <teleport to="#why">
      <span>8888888888</span>
    </teleport>
    
  </div>
</template>

<script>
  import { getCurrentInstance } from 'vue'
  import HelloWorld from './HelloWorld.vue'
  export default {
    components: {
      HelloWorld
    },
    setup() {
      const instance = getCurrentInstance()
      console.log("setup", instance.appContext.config.globalProperties.$name)
    },
    mounted() {
      console.log(this.$name)
    }
  }
</script>

<style scoped>

</style>