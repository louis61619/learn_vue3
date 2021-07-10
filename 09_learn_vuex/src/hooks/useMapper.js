import { computed } from "vue";
import { useStore } from "vuex";

export function useMapper(mapper, mapperFn) {
  const store = useStore();
  const storeStateFn = mapperFn(mapper);
  const storeState = {};
  Object.keys(storeStateFn).forEach((fnKey) => {
    const fn = storeStateFn[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn);
  });
  return storeState;
}
