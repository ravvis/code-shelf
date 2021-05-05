<template>
  <multipane-resizer></multipane-resizer>
</template>
<script>
import { MultipaneResizer } from "vue-multipane";

export default {
  components: {
    MultipaneResizer
  },
  props: {
    horizontal: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    align_type() {
      return this.vertical ? "vertical" : "horizontal";
    },
  },
};
</script>
