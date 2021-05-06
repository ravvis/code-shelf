<template>
  <v-card>
    <windows-wrapper :no_of_windows="get_active_windows.length">
      <template
        v-for="(window, index) in get_active_windows"
        v-slot:[dynamicSlotName(index)]
      >
        <window :key="window.id" :window="window" @show-suggestions="open_query_suggestions(window)">
          <template #editor>
            <editor :window="window"></editor>
          </template>
          <template #result>
            <result :window="window"></result>
          </template>
        </window>
      </template>
    </windows-wrapper>
    <v-row justify="center" align="center">
      <v-dialog v-model="query_suggestions.show" max-width="600px">
        <query-suggestions
          :window="query_suggestions.window"
          :queries="query_suggestions.queries"
          @close="close_query_suggestions"
        ></query-suggestions>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script>
import windowsWrapper from "../../../modules/core/components/windows_wrapper";
import window from "../../../modules/core/components/window";
import querySuggestions from "./query_suggestions";
import { mapGetters } from "vuex";
import Result from "./editor-window/result";
import Editor from "./editor-window/editor";
export default {
  components: {
    Editor,
    Result,
    windowsWrapper,
    window,
    querySuggestions,
  },
  data: () => ({
    query_suggestions: {
      show: false,
      window: {},
      queries: [
        {
          en: "Get all categories",
          code: "SELECT * FROM categories;",
        },
        {
          en: "Get all categories with id = 2",
          code: 'SELECT * FROM categories WHERE categoryID == "2";',
        }
      ],
    },
  }),
  mounted() {
    this.open_query_suggestions(this.get_active_windows[0]);
  },
  computed: {
    ...mapGetters("sql", [
      "get_active_windows"
    ])
  },
  methods: {
    dynamicSlotName(index) {
      return "window" + (index + 1);
    },
    open_query_suggestions(window) {
      console.log({ window })
      this.$set(
        this,
        "query_suggestions",
        Object.assign({ ...this.query_suggestions }, { window, show: true })
      );
    },
    close_query_suggestions() {
      this.query_suggestions.show = false;
    },
  },
};
</script>

<style>
.vertical-panes {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
}
.vertical-panes > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
}
.vertical-panes > .pane ~ .pane {
  border-left: 1px solid #ccc;
}
</style>
