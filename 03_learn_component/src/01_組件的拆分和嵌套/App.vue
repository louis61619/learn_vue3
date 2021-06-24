<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Main from './Main.vue'
export default {
  components: {
    Header,
    Footer,
    Main
  }
};
</script>

<style scoped>
</style>