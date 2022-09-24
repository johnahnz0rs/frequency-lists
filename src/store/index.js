import { createStore } from "vuex";
import KoreanModule from "./modules/korean/index.js";
import SpanishModule from "./modules/spanish/index.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    korean: KoreanModule,
    spanish: SpanishModule,
  },
});
