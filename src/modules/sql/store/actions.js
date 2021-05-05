import { EXECUTE_SQL_QUERY } from "../../../db";

export default {
  execute_query({ commit }, { code, window }) {
    EXECUTE_SQL_QUERY(code).then((result) => {
      commit("SET_RESULT", { window_id: window.id, result });
    });
  },
};
