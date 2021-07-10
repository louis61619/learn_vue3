import { createStore } from "vuex";
import home from "./modules/home";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  modules: {
    home,
  },
});

export default store;
