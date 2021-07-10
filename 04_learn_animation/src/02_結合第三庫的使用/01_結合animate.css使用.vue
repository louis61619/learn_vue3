<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">顯示/隱藏</button>
    </div>
    

    <!-- appear初始化有沒有效果 -->
    <!-- <transition name="why" mode="out-in" :appear="true">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition> -->
    <transition enter-active-class="animate__animated animate__backInDown"
                leave-active-class="animate__animated animate__backInDown reserve">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
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
  height: 300px;
  overflow: hidden;
}

.title {
  /* margin: 20px auto;
  width: 200px; */
  display: inline-block;
}

/* .why-enter-active {
  animation: bounceInUp 1s ease-in;
}
.why-leave-active {
  animation: bounceInUp 1s ease-in reverse;
} */

/* 將動畫進行反轉 */
.reserve {
  animation-direction: reverse;
}
</style>
