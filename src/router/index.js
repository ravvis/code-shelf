import Vue from "vue";
import VueRouter from "vue-router";
import route_names from "./route_names";

// Modules
import sql from "../modules/sql/router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: route_names.home,
    component: () => import(/* webpackChunkName: "main" */ "../views/Main.vue"),
    children: [...sql],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
