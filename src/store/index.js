import Vue from "vue";
import Vuex from "vuex";

// Modules
import sql from "../modules/sql/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sql,
  },

  state: {},
  mutations: {},
  actions: {},
});
