import { ref, watch } from "vue";

export default function(title = "default title") {
  const titleRef = ref(title)
  
  watch(titleRef, (newValue) => {
    document.title = titleRef.value
  }, {
    immediate: true
  })
  
  return {
    titleRef
  }
}