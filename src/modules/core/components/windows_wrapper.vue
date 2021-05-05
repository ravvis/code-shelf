<template>
  <SplitGrid class="b-window__wrapper" direction="column">
    <template v-for="n in no_of_windows">
      <SplitGridArea :key="`grid-area-${n}`">
        <slot :name="`window${n}`"></slot>
      </SplitGridArea>
      <SplitGridGutter :key="`grid-gutter-${n}`" v-if="n !== no_of_windows" />
    </template>
  </SplitGrid>
</template>
<script>
import { SplitGrid, SplitGridArea, SplitGridGutter } from "vue-split-grid";

export default {
  components: {
    SplitGrid,
    SplitGridArea,
    SplitGridGutter,
  },
  props: {
    no_of_windows: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    console.log({ children: this.$children })
  },
};
</script>
