<template>
  <div class="app">
    <button @click="isShow = !isShow">顯示/隱藏</button>

    <!-- appear初始化有沒有效果 -->
    <transition name="why" mode="out-in" :appear="true">
      <component :is="isShow? 'home': 'about'"></component>
    </transition>
  </div>
</template>

<script>
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
export default {
  components: {
    About,
    Home
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}

.title {
  margin: 20px auto;
  width: 200px;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
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
