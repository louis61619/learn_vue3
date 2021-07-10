<template>
  <div>
    <button @click="addNum">添加數字</button>
    <button @click="removeNum">刪除數字</button>
    <button @click="shuffleNum">打亂順序</button>

    <transition-group tag="p" name="why">
      <span v-for="item in arr" :key="item" class="item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    data() {
      return {
        arr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        numCounter: 10
      }
    },
    methods: {
      addNum() {
        // this.arr.push(this.numCounter++)
        this.arr.splice(this.ramdomIndex(), 0, this.numCounter++)
      },
      removeNum() {
        this.arr.splice(this.ramdomIndex(), 1)
      },
      ramdomIndex() {
        return Math.floor(Math.random() * this.arr.length)
      },
      shuffleNum() {
        this.arr = _.shuffle(this.arr)
      }
    }
  }
</script>

<style scoped>
 .item {
   margin-right: 10px;
   font-size: 20px;
   display: inline-block;
 }

 .why-enter-from,
 .why-leave-to {
   opacity: 0;
   transform: translateY(-30px);
 }

 .why-enter-active,
 .why-leave-active {
   transition: all 1s ease;
 }

  /* 透過絕對定位讓其他item的位置不受到干擾 */
 .why-leave-active {
   position: absolute;
 }

  /* vue會處理插入其他item移動的動畫 */
 .why-move {
   transition: transform 1s ease;
 }
</style>