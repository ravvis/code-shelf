export default [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "sql" */ "../components/sql_editor.vue"),
  },
];
