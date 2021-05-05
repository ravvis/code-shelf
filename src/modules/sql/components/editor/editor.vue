<template>
  <codemirror
    style="height: 100%;"
    ref="myCm"
    :value="window.code"
    :options="$options.$cmOptions"
    @input="SET_CODE({ window_id: window.id, code: $event })"
  ></codemirror>
</template>
<script>
import "codemirror/lib/codemirror.css";
import "codemirror/lib/codemirror.js"

// language js
import "codemirror/mode/sql/sql.js";
// theme css
import "codemirror/theme/base16-dark.css";

import { codemirror } from "vue-codemirror";
import { mapMutations } from "vuex";

export default {
  components: {
    codemirror,
  },
  $cmOptions: {
    // codemirror options
    tabSize: 4,
    mode: "text/x-sql",
    theme: "base16-dark",
    line: true,
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    matchBrackets : true,
    autofocus: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    hintOptions: {tables: {
        users: ["name", "score", "birthDate"],
        countries: ["name", "population", "size"]
      }}
  },
  props: {
    window: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations("sql", ["SET_CODE"]),
  },
};
</script>
<style scoped>
>>> .CodeMirror{
  height: 100%;
}
</style>
