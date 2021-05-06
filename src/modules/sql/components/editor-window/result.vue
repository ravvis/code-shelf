<template>
  <v-card>
    <div class="d-flex align-center">
      <v-card-title> Query results </v-card-title>
      <v-btn
        @click="export_results"
        v-if="allow_exporting_results"
        class="ml-lg-16"
      >
        <v-icon class="mr-2">mdi-database-export-outline</v-icon> EXPORT RESULTS
      </v-btn>
    </div>
    <div v-if="!(window.result && window.result.length)"></div>
    <v-data-table
      v-else
      :items="window.result || []"
      :headers="
        Object.keys(window.result[0]).map((r) => ({
          text: r,
          value: r,
        }))
      "
    ></v-data-table>
  </v-card>
</template>
<script>
import EXPORT_TABLE_PDF from "../../../core/utils/export_table_pdf";

export default {
  props: {
    window: {
      type: Object,
      required: true,
    },
  },
  computed: {
    allow_exporting_results() {
      return (
        this.window &&
        this.window.result &&
        Array.isArray(this.window.result) &&
        this.window.result.length
      );
    },
  },
  methods: {
    export_results() {
      if (this.allow_exporting_results) {
        const head = [Object.keys(this.window.result[0]).map((r) => r)];
        const rows = this.window.result.map((result) => Object.values(result));
        EXPORT_TABLE_PDF({ head, body: rows, file_name: "results" });
      }
    },
  },
};
</script>
