<template>
  <v-card>
    <v-card-title class="headline">
      <v-icon class="mr-2" medium>mdi-lightbulb-on-outline</v-icon> Query
      Suggestions
    </v-card-title>

    <v-card-text> Select a query and execute it in the editor </v-card-text>

    <v-card-text>
      <div
        v-for="(query, index) in queries"
        :key="index"
        class="d-flex justify-space-between"
        style="position: relative"
      >
        <div>
          <v-card-subtitle>
            <v-icon class="mr-2"> mdi-star-circle </v-icon>{{ query.en }}
          </v-card-subtitle>
          <vue-code-highlight language="sql" class="flex-grow-1">
            {{ query.code }}
          </vue-code-highlight>
        </div>
        <v-tooltip top style="position: absolute; top: 0; right: 0">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="copy_to_editor(query.code)"
              fab
              x-small
              class="mx-2"
              v-bind="attrs"
              v-on="on"
              ><v-icon> mdi-content-copy </v-icon>
            </v-btn>
          </template>
          <span>Copy to editor</span>
        </v-tooltip>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green darken-1" text @click="$emit('close')"> Close </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "vue-code-highlight/themes/prism-twilight.css";
import "vue-code-highlight/themes/window.css";
export default {
  components: {
    VueCodeHighlight,
  },
  props: {
    window: {
      type: Object,
      required: true,
    },
    queries: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations("sql", ["SET_CODE"]),
    ...mapActions("sql", ["execute_query"]),
    copy_to_editor(query) {
      this.SET_CODE({ window_id: this.window.id, code: query });
      this.execute_query({
        code: query,
        window: this.window
      });
      this.$emit("close");
    },
  },
};
</script>
