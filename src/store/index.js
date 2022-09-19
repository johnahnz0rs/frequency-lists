import { createStore } from "vuex";
import koreanModule from "./modules/korean/index.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    korean: koreanModule,
  },
});
