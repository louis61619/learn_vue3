import { createStore } from "vuex";
import { INCREMENT_N } from "./mutation-types";
import axios from "axios";

const state = () => {
  return {
    counter: 100,
    name: "Renny",
    age: 26,
    books: [
      { name: "深入webpack", price: 180, counter: 6 },
      { name: "深入react", price: 240, counter: 8 },
      { name: "深入vue", price: 250, counter: 8 },
      { name: "深入nodejs", price: 260, counter: 8 },
    ],
    banners: [],
  };
};

const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  [INCREMENT_N](state, payload) {
    console.log(payload);
    state.counter += payload.n;
  },
  addBannerData(state, payload) {
    state.banners = payload;
  },
};

const getters = {
  totalPrice(state, getters) {
    let totalPrice = 0;
    for (let item of state.books) {
      totalPrice += item.counter * item.price;
    }
    return totalPrice * getters.discount;
  },
  discount() {
    return 0.9;
  },
  totalCounterGreateN(state) {
    return (n) => {
      let totalPrice = 0;
      for (let item of state.books) {
        if (item.counter <= n) continue;
        totalPrice += item.counter * item.price;
      }
      return totalPrice;
    };
  },
};

const actions = {
  incrementAction({ commit }, payload) {
    console.log(payload);
    commit("increment");
  },
  decrementAction({ commit }) {
    commit("decrement");
  },
  getHomeMultiData({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("http://123.207.32.32:8000/home/multidata")
        .then((res) => {
          commit("addBannerData", res.data.data.banner.list);
          resolve("成功");
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const store = createStore({
  state,
  mutations,
  getters,
  actions,
});

export default store;
