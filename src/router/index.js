import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/HelloWorld.vue";
import json02 from "views/json02.vue";
import componentDemo from "views/component-demo.vue";
import ani_btn from "animation/ani_btn.vue";
import ig from "views/oEmbed";
import selectMap from "views/selectMap";
const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
  },
  {
    path: "/main",
    name: "main",
    component: Home,
  },
  {
    path: "/json02",
    name: "json02",
    component: json02,
  },
  {
    path: "/demo",
    name: "demo",
    component: componentDemo,
  },
  {
    path: "/ani_btn",
    name: "ani_btn",
    component: ani_btn,
  },
  {
    path: "/ig",
    name: "oEmbed",
    component: ig,
  },
  {
    path: "/selectMap",
    name: "selectMap",
    component: selectMap,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
