<template>
  <div>
    <h2>Hello Router</h2>
    <!-- v-slot可以傳遞不同的參數 -->
    <!-- props: href -->
    <!-- props: route -->
    <!-- props: navigate 導航函數 -->
    <!-- props: isActive 是否當前路由處於活躍狀態 -->
    <!-- props: isExactActive 是否當前路由處於活躍狀態 -->
    <router-link to="/home" replace v-slot="props" custom>
      <strong>{{ props.href }}</strong>
      <!-- <button>{{ props.route }}</button> -->
      <button @click="props.navigate">{{ props.href }}</button>
      <p>{{ props.isActive }}-{{ props.isExactActive }}</p>
    </router-link>
    <router-link :to="{path:'/about', query: {name: 'Louis'}}" replace>關於</router-link>
    <router-link to="/user/Renny/id/888" replace>用戶</router-link>
    <button @click="jumpToHome">用戶Renny</button>
    <button @click="routerGo">前進一步</button>
    <router-link to="/category">系列</router-link>
    <!-- <router-view></router-view> -->

    <!-- 加入動畫 淡入淡出 -->
    <router-view v-slot="props">
      <transition name="why" mode="out-in">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'
  export default {
    created() {
      console.log('------------')
    },
    methods: {
      jumpToHome() {
        // this.$router.push('/user/Renny/id/888')
        this.$router.push({
          name: "user",
          params: {
            name: "Louis",
            id: "8888"
          }
        })
      }
    },
    setup() {
      const router = useRouter()

      const jumpToHome = () => {
        router.push('/user/Renny/id/99999')
      }

      const routerGo = () => {
        router.go(1)
      }

      return {
        jumpToHome,
        routerGo
      }
    }
  }
</script>

<style>
.router-link-active {
  color: red;
}
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>