<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">顯示/隱藏</button>
    </div>
    

    <!-- appear初始化有沒有效果 -->
    <!-- <transition name="why" mode="out-in" :appear="true">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition> -->
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
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
    beforeEnter() {
      console.log('beforeEnter')
    },
    enter() { // 一般會在這邊執行動畫
      console.log("enter")
    },
    afterEnter() {
      console.log("afterEnter")
    },
    beforeLeave() {
      console.log("beforeLeave")
    },
    leave() {
      console.log("leave")
    },
    afterLeave() {
      console.log("afterLeave")
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

</style>
