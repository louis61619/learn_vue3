<template>
  <div class="app">
    <button @click="isShow = !isShow">顯示/隱藏</button>

    <transition name="why">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
/* 動畫會有進入和離開兩種 */
/* 給初始化的值 */
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

/* 如果結束的默認值就是1可以去掉 */
/* .why-enter-to,
.why-leave-from {
  opacity: 1;
} */

/* 給執行中的動畫狀態 */
.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease;
}
</style>