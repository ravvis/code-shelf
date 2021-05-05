<template>
  <multipane class="b-window-resize">
    <slot></slot>
  </multipane>
</template>
<script>
import { Multipane } from "vue-multipane";

export default {
  components: { Multipane },
  props: {
    horizontal: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    number_of_elements: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      mouse_is_down: -1,
    };
  },
  mounted() {
  },
};
</script>
