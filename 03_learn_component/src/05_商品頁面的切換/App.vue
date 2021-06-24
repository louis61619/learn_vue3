<template>
  <div>
    <TabControl :titles="titles" @selectIndex="selectIndex" />
    <h2>{{ contents[currentIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue'

export default {
  components: {
    TabControl
  },
  data() {
    return {
      titles: ["衣服", "鞋子", "褲子"],
      contents: ["衣服頁面", "鞋子頁面", "褲子頁面"],
      currentIndex: 0
    }
  },
  methods: {
    selectIndex(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>

</style>