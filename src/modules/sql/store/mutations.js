import get_random_id from "../../../modules/core/utils/get_random_id";
import Vue from "vue";
export default {
  ADD_WINDOW(state, payload = {}) {
    state.editor_windows.push(
      Object.assign(
        {},
        { ...state.base_edit_window },
        { id: get_random_id() },
        { ...payload }
      )
    );
  },
  REMOVE_WINDOW(state, id) {
    const idx = state.editor_windows.findIndex((window) => window.id === id);
    if (idx !== -1) {
      state.editor_windows.splice(idx, 1);
    }
  },
  REMOVE_ALL_WINDOWS(state) {
    Vue.set(state, "editor_windows", []);
  },
  SET_CODE(state, { window_id, code }){
    const idx = state.editor_windows.findIndex((window) => window.id === window_id);
    if (idx !== -1) {
      Vue.set(state.editor_windows[idx], "code", code);
    }
  },
  SET_RESULT(state, { window_id, result }){
    const idx = state.editor_windows.findIndex((window) => window.id === window_id);
    if (idx !== -1) {
      Vue.set(state.editor_windows[idx], "result", result);
    }
  },
};
