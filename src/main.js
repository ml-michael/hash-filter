import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Router from "./router";
import InstagramEmbed from "vue-instagram-embed";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

createApp(App)
  .use(Router)
  .use(InstagramEmbed)
  .component("v-select", vSelect)
  .mount("#app");
