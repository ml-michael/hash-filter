import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/HelloWorld.vue";
import json02 from "views/view02.vue";
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
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
