<template>
  <v-card>
    <v-card-title>Query results</v-card-title>
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
export default {
  props: {
    window: {
      type: Object,
      required: true,
    },
  },
};
</script>
