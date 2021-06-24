<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
  <div>
    <slot :name="name"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style>
.nav-bar {
  display: flex;
  height: 50px;
  width: 100%;
}
.left, .right {
  flex: 1;
  background-color: blanchedalmond;
}
.center {
  width: 80%;
  background-color: burlywood;
}
</style>