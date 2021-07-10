

<template>
  <div>
    <!-- <input type="text" v-focus> -->
    <button v-if="isShow" v-custom.aaa="'renny'" @click="buttonClick">當前計數: {{ counter }}</button>
    <button @click="isShow = !isShow">顯示/隱藏</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    // 局部指令
   directives: {
     custom: {
       created(el, binding, vnode, preVnode) {
         console.log("created", el, binding, vnode, preVnode)
         console.log(binding)
       },
       beforeMount() {
         console.log("beforeMount")
       },
       mounted() {
         console.log("mounted")
       },
       beforeUpdate() {
         console.log("beforeUpdate")
       },
       updated() {
         console.log("updated")
       },
       beforeUnmount() {
         console.log("beforeUnmount")
       },
       unmounted() {
         console.log("Unmounted")
       },
     }
   },
   setup() {
     const counter = ref(0)
     const isShow = ref(true)
     const buttonClick = () => {
       counter.value++
     }
     return {
       counter,
       buttonClick,
       isShow
     }
   },
  //  data() {
  //    return {
  //      isShow: true
  //    }
  //  },
  }
</script>

<style scoped>

</style>