import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import KoreanPage from "../pages/KoreanPage.vue";
import SpanishPage from "../pages/SpanishPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/korean",
    name: "korean",
    component: KoreanPage,
  },
  {
    path: "/spanish",
    name: "spanish",
    component: SpanishPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
