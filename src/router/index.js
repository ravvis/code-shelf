import Vue from "vue";
import VueRouter from "vue-router";
import route_names from "./route_names";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: route_names.home,
    component: () => import(/* webpackChunkName: "main" */ "../views/Main.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
