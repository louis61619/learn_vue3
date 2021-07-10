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
.app {
  text-align: center;
}

.title {
  margin: 20px auto;
  width: 200px;
}

/* 添加animation動畫只要在需要的時間加入對應的css就好 */
.why-enter-active {
  animation: bounce 1s ease;
}

/* reverce表示動畫反轉 */
.why-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: 0;
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>