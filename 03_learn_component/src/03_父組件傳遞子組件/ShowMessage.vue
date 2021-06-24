<template>
<div>
  <!-- $attr可以獲取沒有被props選取的屬性 -->
  <!-- <h2 :class="$attrs.class">{{ title }}</h2> -->
  <h2 v-bind="$attrs">{{ title }}</h2>
  <p>{{ content }}</p>
</div>
  
</template>

<script>
export default {
  inheritAttrs: false, // 禁止父層的屬性套用到子組件的根
  // props: ["title", "content"]
  props: {
    title: {
      type: String,
      // required: true, // 必傳
      default: "99999999"
      
    },
    content: {
      type: String
    },
    obj: {  // 如果是物件必須返回一個函數避免指針指向同一個物件
      type: Object,
      default() {
        return {
          name: "Renny"
        }
      }
    },
    fun: { // 傳函數是這樣的
      type: Function,
      default() {
        return "Default function"
      }
    }
  }
}
</script>

<style>

</style>