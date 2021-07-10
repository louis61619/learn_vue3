<template>
  <div class="app">
    <input v-model="keyword" type="text" />
    <transition-group tag="ul" name="why" 
                      @before-enter="beforeEnter"
                      @enter="enter" 
                      @leave="leave"
                      :css="false">
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import gsap from 'gsap'
  export default {
    data() {
      return {
        names: ['sdfad', 'fdsf', 'fdr', 'aer', 'bcvc', 'pplp', 'jojiuu', 'aaaa', 'abba'],
        keyword: ""
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1)
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.height = 0
      },
      enter(el, done) {
        gsap.to(el, {
          opacity: 1,
          height: "auto",
          delay: el.dataset.index * 0.05,
          onComplete: done
        })
      },
      leave(el, done) {
        gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.05,
          onComplete: done
        })
      }
    }
  }
</script>

<style scoped>
.app {
 font-size: 20px;
 line-height: 30px;
}
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: 1s opacity ease;
}
</style>