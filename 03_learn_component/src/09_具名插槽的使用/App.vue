<template>
  <NavBar :name="name">
    <!-- slot 默認的name是default -->
    <!-- v-slot省略的寫法是# -->
    <template #left>
      <button>左邊的按鈕</button>
    </template>
    <template #center>
      <h2>中間的內容</h2>
    </template>
    <template #right>
      <button>右邊的按鈕</button>
    </template>
    <!-- 動態具名插槽 -->
    <template v-slot:[name]>
      <h2>動態插槽</h2>
    </template>
  </NavBar>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      name: "lol"
    }
  },
}
</script>

<style>

</style>