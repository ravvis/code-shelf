<template>
  <v-card>
    <v-card-text>Hello world</v-card-text>
    <!--    <window-resize :number_of_elements="2">-->
    <!--      <div>col 1</div>-->
    <!--      <window-resize-split-bar></window-resize-split-bar>-->
    <!--      <div>col 2</div>-->
    <!--    </window-resize>-->
    <multipane class="vertical-panes" layout="vertical">
      <div
        class="pane"
        :style="{ minWidth: '100px', width: '150px', maxWidth: '200px' }"
      >
        <div>
          <h6 class="title is-6">Pane 1</h6>
          <p class="subtitle is-6">Fixed width.</p>
          <p>
            <small>
              <strong>Configured with:</strong><br />
              minWidth: 100px<br />
              width: 150px<br />
              maxWidth: 200px<br />
            </small>
          </p>
        </div>
      </div>
      <multipane-resizer></multipane-resizer>
      <div
        class="pane"
        :style="{ minWidth: '100px', width: '150px', maxWidth: '200px' }"
      >
        <div>
          <h6 class="title is-6">Pane 1</h6>
          <p class="subtitle is-6">Fixed width.</p>
          <p>
            <small>
              <strong>Configured with:</strong><br />
              minWidth: 100px<br />
              width: 150px<br />
              maxWidth: 200px<br />
            </small>
          </p>
        </div>
      </div>
      <multipane-resizer></multipane-resizer>
      <div
        class="pane"
        :style="{ minWidth: '100px', width: '150px', maxWidth: '200px' }"
      >
        <div>
          <h6 class="title is-6">Pane 1</h6>
          <p class="subtitle is-6">Fixed width.</p>
          <p>
            <small>
              <strong>Configured with:</strong><br />
              minWidth: 100px<br />
              width: 150px<br />
              maxWidth: 200px<br />
            </small>
          </p>
        </div>
      </div>
    </multipane>
  </v-card>
</template>

<script>
// import WindowResize from "../modules/core/components/window-resize/WindowResize";
// import WindowResizeSplitBar from "../modules/core/components/window-resize/WindowResizeSplitBar";
import { Multipane, MultipaneResizer } from "vue-multipane";

export default {
  components: {
    // WindowResize,
    // WindowResizeSplitBar,
    Multipane,
    MultipaneResizer,
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
