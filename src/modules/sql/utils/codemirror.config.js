export const SQL_CM_OPTIONS = () => ({
  tabSize: 4,
  mode: "text/x-sql",
  theme: "base16-dark",
  line: true,
  indentWithTabs: true,
  smartIndent: true,
  lineNumbers: true,
  matchBrackets: true,
  autofocus: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },
  hintOptions: {
    tables: {
      categories: ["categoryID", "description", "name"],
    },
  },
});
