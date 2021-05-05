export const initial_state = () => ({
  editor_windows: [],
  base_edit_window: {
    code: `SELECT * FROM categories`,
    result: [],
    id: null,
    active: false,
  },
});
const state = initial_state();
export default state;
