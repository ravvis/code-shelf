<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title style="width: 150px">
        {{ app_title }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    app_title: "<CodeShelf/>",
    language_options: ["sql"],
    language: "sql",
  }),
};
</script>
