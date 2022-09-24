import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import KoreanPage from "../pages/KoreanPage.vue";
import SpanishPage from "../pages/SpanishPage.vue";

// import SomePage from "../pages/SomePage.vue"

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
  //   path: "",
  //   name: "",
  //   component: SomePage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
