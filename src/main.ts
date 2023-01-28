import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { ColorPicker } from "vue-accessible-color-picker";

createApp(App)
  .component("color-picker", ColorPicker)
  .use(store)
  .use(router)
  .mount("#app");
