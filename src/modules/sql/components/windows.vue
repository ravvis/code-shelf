<template>
  <v-card>
    <windows-wrapper :no_of_windows="get_active_windows.length">
      <template v-for="(window, index) in get_active_windows" v-slot:[dynamicSlotName(index)]>
        <window :key="window.id" :window="window">
          <template #editor>
            <editor :window="window"></editor>
          </template>
          <template #result>
            <result :window="window"></result>
          </template>
        </window>
      </template>
    </windows-wrapper>
  </v-card>
</template>

<script>
import windowsWrapper from "../../../modules/core/components/windows_wrapper";
import window from "../../../modules/core/components/window";
import { mapGetters } from "vuex";
import Result from "./result/result";
import Editor from "./editor/editor";
export default {
  components: {
    Editor,
    Result,
    windowsWrapper,
    window,
  },
  computed: {
    ...mapGetters("sql", [
      'get_active_windows'
    ])
  },
  methods: {
    dynamicSlotName(index){
      return "window" + (index + 1)
    }
  }
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
