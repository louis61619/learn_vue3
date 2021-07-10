import { createApp } from "vue";
// import App from './01_render函數的使用/App.vue'
// import App from './02_jsx的使用/App.vue'
import App from "./03_自訂義指令/App.vue";
// import App from './04_teleport/App.vue'

import regersiterDerectives from './directives'

// 註冊插件
import pluginObject from './plugins/plugin_object'
import pluginFunction from './plugins/plugin_function'

const app = createApp(App);

regersiterDerectives(app)

app.use(pluginObject)
app.use(pluginFunction)

// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     el.focus();
//   },
// });

app.mount("#app");
