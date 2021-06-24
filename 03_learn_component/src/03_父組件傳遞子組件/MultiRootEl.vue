<template>
  <!-- 多個根不會自動套用，需要指定attr套用的位置 -->
  <h2 :id="$attrs.id">MultiRootElement</h2>
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>
</template>

<script>
export default {

}
</script>

<style>

</style>