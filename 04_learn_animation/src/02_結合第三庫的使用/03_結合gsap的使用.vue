<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">顯示/隱藏</button>
    </div>
    

    <!-- appear初始化有沒有效果 -->
    <!-- css可以定義使不使用css動畫 -->
    <transition @enter="enter"
                @leave="leave"
                :css="false"
                >
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  components: {
  },
  data() {
    return {
      isShow: true,
      distance: 200
    };
  },
  methods: {
    enter(el, done) { // 一般會在這邊執行動畫
      console.log("enter")
      gsap.from(el, {
        scale: 0,
        x: this.distance,
        onComplete: done
      })
    },
    leave(el, done) {
      console.log("leave")
      gsap.to(el, {
        scale: 0,
        x: this.distance,
        onComplete: done
      })
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
