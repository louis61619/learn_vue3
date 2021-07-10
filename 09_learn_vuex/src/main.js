import { createApp } from "vue";
import store from "./store";
// import App from "./App.vue";
import App from "./App_nexttick.vue";

createApp(App).use(store).mount("#app");
