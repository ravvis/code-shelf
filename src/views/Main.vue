<template>
  <v-card>
    <router-view></router-view>
  </v-card>
</template>

<script>
// import WindowResize from "../modules/core/components/window-resize/WindowResize";
// import WindowResizeSplitBar from "../modules/core/components/window-resize/WindowResizeSplitBar";
// import windowsWrapper from "../modules/core/components/windows_wrapper";
// import window from "../modules/core/components/window";
export default {
  components: {
    // windowsWrapper,
    // window,
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
