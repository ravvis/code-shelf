<template>
  <core-editor
    style="height: 100%;"
    @input="SET_CODE({ window_id: window.id, code: $event })"
    :value="window.code"
    :options="$options.$editorOptions"
  ></core-editor>
</template>
<script>
import coreEditor from "../../../core/components/editor-window/editor";
import { SQL_CM_OPTIONS } from "../../utils/codemirror.config";
import { mapMutations } from "vuex";

export default {
  components: {
    coreEditor,
  },
  $editorOptions: SQL_CM_OPTIONS(),
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
