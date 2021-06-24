<template>
  <div>
    <button v-for="item in tabs" 
            :key="item"
            :class="{active: item === currentTab}"
            @click="itemClick(item)">
      {{ item }}
    </button>
    <!-- include exclude max -->
    <!-- 需要對組件命名 -->
    <!-- 緩存組件不會被銷毀所以不會重新create，並有另外兩個生命週期actived deactived -->
    <keep-alive include="Category">
      <component :is="currentTab" name="Renny" @pageClick="pageClick"></component>
    </keep-alive>
    
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'

export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home"
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item
    },
    pageClick() {
      console.log("點擊")
    }
  }
};
</script>

<style>
.active {
  color: red;
}
</style>
