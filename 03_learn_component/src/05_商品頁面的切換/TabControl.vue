<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
         :key="item"
         class="item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
         {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  emits: ["selectIndex"],
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("selectIndex", index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
}
.item {
  padding: 15px 16px;
  /* border: 1px solid black; */
}
.active {
  color: red;
  border-bottom: 3px solid red;
}
</style>