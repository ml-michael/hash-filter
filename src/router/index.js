import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/HelloWorld.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/view01.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
