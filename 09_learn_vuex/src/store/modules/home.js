const homeModule = {
  namespaced: true,
  state: {
    homeCounter: 0,
  },
  getters: {
    // 有多個參數 state, getters, rooteState, rootGetters
    doubleHomeCounter(state) {
      return state.homeCounter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++;
    },
    decrement(state) {
      state.homeCounter--;
    },
  },
  actions: {
    // context 的屬性有 commit dispatch state rootState rootGetters
    incrementAction({ commit }) {
      commit("increment");
      // 可以對根的數據進行提交
      commit("increment", null, { root: true });
    },
  },
};

export default homeModule;
