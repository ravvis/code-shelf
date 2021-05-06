<template>
  <codemirror
    style="height: 100%;"
    ref="myCm"
    v-bind="$attrs"
    v-on="$listeners"
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

export default {
  components: {
    codemirror,
  },
};
</script>
<style scoped>
>>> .CodeMirror{
  height: 100%;
}
</style>
