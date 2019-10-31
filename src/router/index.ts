import Vue from "vue";
import VueRouter from "vue-router";
import {default as Home} from "../views/Home.vue";
import {default as About} from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
