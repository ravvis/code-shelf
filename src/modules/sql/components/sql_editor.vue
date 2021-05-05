<template>
  <v-card>
    <windows v-if="loaded"></windows>
  </v-card>
</template>
<script>
import Windows from "./windows";
import { mapMutations } from "vuex";
export default {
  components: { Windows },
  data: () => ({
    loaded: false,
  }),
  mounted() {
    this.ADD_WINDOW();
    this.loaded = true;
  },
  methods: {
    ...mapMutations("sql", ["ADD_WINDOW"]),
  },
};
</script>
