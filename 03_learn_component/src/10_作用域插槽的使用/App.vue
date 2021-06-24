<template>
  <div>
    <ChildCpn :names="names">
      <!-- <slot>
        <h2>88888888</h2>
      </slot> -->
      <template v-slot:lol="slotProps">
        <button>
          {{slotProps.item}}
        </button>
      </template>
    </ChildCpn>

    <!-- 獨佔默認插槽 如果有具名插槽必須加入template-->
    <!-- <ChildCpn :names="names" v-slot="slotProps">
        <button>
          {{slotProps.item}}
        </button>
    </ChildCpn> -->
  </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue'
export default {
  components: {
    ChildCpn
  },
  data() {
    return {
      names: ['why', 'renny', 'louis']
    }
  },
}
</script>

<style>

</style>