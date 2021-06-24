<template>
  <h2>HomeContent-{{name}}-{{age}}-{{length.value}}</h2>
</template>

<script>
export default {
  inject: ["name", "age", "length"]
}
</script>

<style>

</style>