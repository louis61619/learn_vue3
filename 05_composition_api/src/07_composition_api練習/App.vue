<template>
<div>
  <h2>{{ counter }}</h2>
  <h2>{{ doubleCounter }}</h2>
  
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <h2>{{ data }}</h2>
  <button @click="changeData">修改</button>
  
  <div class="content"></div>
  <div class="scroll">
    <div class="scroll-x">mouseX: {{ mouseX }}</div>
    <div class="scroll-y">mouseY: {{ mouseY }}</div>
    <div class="scroll-x">scrollX: {{ scrollX.toFixed(0) }}</div>
    <div class="scroll-y">scrollY: {{ scrollY.toFixed(0) }}</div>
  </div>
</div>

</template>

<script>
import {
  useLocalstorage,
  useCounter,
  useTitle,
  useScrollPosition,
  useMouse,
} from './hooks'

export default {
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  // computed: {
  //   doubleCounter() {
  //     return this.counter * 2
  //   }
  // },
  // methods: {
  //   increment() {
  //     this.counter++
  //   },
  //   decrement() {
  //     this.counter--
  //   }
  // }

  // 以下是使用composition api的寫法
  setup() {

    // counter
    const { counter, doubleCounter, increment, decrement } = useCounter()
    
    // title
    const { titleRef } = useTitle()
    setTimeout(() => {
      titleRef.value = "Louis"
    }, 3000)

    // 滾動位置
    const { scrollX, scrollY } = useScrollPosition()

    // 滑鼠位置
    const { mouseX, mouseY } = useMouse()

    // localstorage
    const data = useLocalstorage('info', {
      name: "Renny",
      age: 26
    })
    const changeData = () => {
      data.value = "哈哈哈"
    }
    
    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      titleRef,
      // ...useCounter()
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData
    }
  }
}
</script>

<style>
.content {
  width: 3000px;
  height: 3000px;
}

.scroll {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>