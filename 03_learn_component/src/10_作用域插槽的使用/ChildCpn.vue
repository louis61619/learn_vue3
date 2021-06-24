<template>
  <div>
    <!-- <slot></slot> -->
    <template v-for="item in names" :key="item">
      <!-- <span>{{ item }}-</span> -->
      <slot name="lol" :item="item"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style>

</style>