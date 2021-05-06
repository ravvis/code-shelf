import Vue from "vue";
import Vuex from "vuex";

// Modules
import sql from "../modules/sql/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sql,
  },

  state: {
    notification: {
      message: ``,
      show: false,
    },
  },
  getters: {
    to_show_notification(state){
      return state.notification.show;
    },
    get_notification_message(state){
      return state.notification.message;
    }
  },
  mutations: {
    SET_NOTIFICATION(state, payload) {
      Vue.set(state, "notification", payload);
    },
  },
  actions: {
    show_notification({ commit }, { message }) {
      commit("SET_NOTIFICATION", {
        show: true,
        message,
      });
    },
    hide_notification({ commit }) {
      commit("SET_NOTIFICATION", {
        show: false,
      });
    },
  },
});
