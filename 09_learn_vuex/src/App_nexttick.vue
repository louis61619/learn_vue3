<template>
  <h2 ref="titleRef">{{ message }}</h2>
  <button @click="addContent">加入內容</button>
</template>

<script>
import { ref, nextTick } from "vue";
export default {
  setup() {
    const message = ref("");
    const titleRef = ref(null);
    const addContent = () => {
      message.value += "Hello nexttick";

      // 將回調推遲到DOM更新之後執行 (放在微任務隊列的最後去執行)
      nextTick(() => {
        console.log(titleRef.value.offsetWidth);
      });
    };

    // onUpdated(() => {
    //   console.log(titleRef.value.offsetWidth);
    // });

    // 之所以要使用隊列進行數據得更新 是因為不想要重複調用watach會等待該任務執行完畢再進行watch的調用
    // const increment = () => {
    //   for(let i =0; i<100; i++) {
    //     value++
    //   }
    // }

    return {
      message,
      addContent,
      titleRef,
    };
  },
};
</script>

<style scoped>
h2 {
  display: inline;
}
</style>
