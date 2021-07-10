<template>
  <h2>Home: {{ homeCounter }}</h2>
  <h2>DoubleCounter {{ doubleHomeCounter }}</h2>
  <button @click="increment">home+1</button>
  <button @click="decrement">home-1</button>
  <button @click="incrementAction">home action +1</button>
  <!-- <h2>doubleHomeCounter: {{ $store.getters.doubleHomeCounter }}</h2> -->
  <h2>doubleHomeCounter: {{ $store.getters["home/doubleHomeCounter"] }}</h2>
  <hr />
</template>

<script>
import {
  // mapActions,
  // mapMutations,
  // mapGetters,
  // mapState,
  createNamespacedHelpers,
} from "vuex";

const { mapActions, mapMutations } = createNamespacedHelpers("home");

import { useGetters, useState } from "../hooks/index";

export default {
  computed: {
    // 寫法一
    // ...mapState(["home/homeCounter"]),
    // ...mapGetters(["home/doubleHomeCounter"]),
    //
    // 寫法二
    // ...mapState("home", ["homeCounter"]),
    // ...mapGetters("home", ["doubleHomeCounter"]),
    //
    // 寫法三 使用createNamespacedHelpers
    // ...mapState(["homeCounter"]),
    // ...mapGetters(["doubleHomeCounter"]),
  },
  methods: {
    // 寫法一
    // ...mapMutations({
    //   incremet: "home/increment",
    //   decrement: "home/decrement",
    // }),
    // ...mapActions(["home/incrementAction"]),
    //
    // 寫法二
    // ...mapMutations("home", ["increment", "decrement"]),
    // ...mapActions("home", ["incrementAction"]),
    //
    // 寫法三 使用createNamespacedHelpers
    // ...mapMutations(["increment", "decrement"]),
    // ...mapActions(["incrementAction"]),
  },
  setup() {
    const state = useState("home", ["homeCounter"]);
    const getters = useGetters("home", ["doubleHomeCounter"]);
    const mutations = mapMutations(["increment", "decrement"]);
    const actions = mapActions(["incrementAction"]);

    return {
      ...state,
      ...getters,
      ...mutations,
      ...actions,
    };
  },
};
</script>

<style scoped></style>
