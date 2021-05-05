<template>
  <v-card>
    <v-card-title>
      <div
        class="d-flex justify-space-between align-center"
        style="width: 100%"
      >
        <div>SQL</div>
        <div>
          <v-tooltip top v-for="(action, index) in editor_actions" :key="index">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="action.cb"
                fab
                small
                class="mx-2"
                v-bind="attrs"
                v-on="on"
                ><v-icon> {{ action.icon }} </v-icon>
              </v-btn>
            </template>
            <span>{{ action.message }}</span>
          </v-tooltip>
        </div>
      </div>
    </v-card-title>
    <SplitGrid class="b-window" direction="row">
      <SplitGridArea>
        <editor>
          <slot name="editor"></slot>
        </editor>
      </SplitGridArea>
      <SplitGridGutter />
      <SplitGridArea>
        <result>
          <slot name="result"></slot>
        </result>
      </SplitGridArea>
    </SplitGrid>
  </v-card>
</template>
<script>
import editor from "./editor-window/editor";
import result from "./editor-window/editor";
import { SplitGrid, SplitGridArea, SplitGridGutter } from "vue-split-grid";
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    editor,
    result,
    SplitGrid,
    SplitGridArea,
    SplitGridGutter,
  },
  props: {
    window: {},
  },
  computed: {
    editor_actions() {
      return [
        {
          icon: "mdi-help-circle",
          cb: () => {
            this.$emit("show-suggestions");
          },
          message: "Query Suggestions",
        },
        {
          icon: "mdi-play",
          cb: () => {
            this.run_code();
          },
          message: "Run code",
        },
        {
          icon: "mdi-content-copy",
          cb: () => {
            this.copy_to_clipboard();
          },
          message: "Copy to clipboard",
        },
        {
          icon: "mdi-content-duplicate",
          cb: () => {
            this.ADD_WINDOW({ code: this.window.code });
          },
          message: "Duplicate window",
        },
        {
          icon: "mdi-delete",
          cb: () => {
            this.REMOVE_WINDOW(this.window.id);
          },
          message: "Remove window",
        },
        {
          icon: "mdi-pencil-plus",
          cb: () => {
            this.ADD_WINDOW()
          },
          message: "Open new window",
        },
      ];
    },
  },
  methods: {
    ...mapMutations("sql", ["REMOVE_WINDOW", "ADD_WINDOW"]),
    ...mapActions("sql", ["execute_query"]),
    run_code() {
      console.log("run code!");
      this.execute_query({
        code: this.window.code,
        window: this.window
      })
    },
    copy_to_clipboard() {
      const str = this.window.code;
      const el = document.createElement("input");
      // Does not work:
      // dummy.style.display = "none";
      el.style.height = '0px';
      // Does not work:
      // el.style.width = '0px';
      el.style.width = '1px';
      document.body.appendChild(el);
      el.value = str;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
};
</script>
<style>
.b-window {
  min-height: 600px;
  min-width: 200px;
}
</style>
