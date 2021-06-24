<template>
  <div>
    <!-- chunck是第三方包 所有程式碼都會打包進App -->
    <h2>App</h2>
    <Home />

    <!-- 非同步組件可以結合suspense使用 -->
    <AsyncCategory />
    <suspense>
      <template #default>
        <AsyncCategory />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </suspense>
    
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Home from './Home.vue'
import Loading from './Loading.vue'

const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))
// const AsyncCategory = defineAsyncComponent({
//   loader: () => import('./AsyncCategory.vue'),
//   loadingComponent: Loading,
//   // errorComponent
//   // 顯示loadingcomponent的等待時間
//   delay: 2000,
//   /**
//    * err 錯誤信息
//    * retry 調用重試
//    * fail 函數退出加載程序
//    * attemps 紀錄嘗試次數
//    */
//   onError: (err, retry, fail, attemps) => {

//   }
// })
export default {
  components: {
    Home,
    AsyncCategory,
    Loading
  }
}
</script>

<style>

</style>