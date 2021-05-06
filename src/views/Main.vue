<template>
  <v-card>
    <router-view></router-view>
    <v-snackbar
      :timeout="1000"
      :value="to_show_notification"
      @input="hide_notification"
      absolute
      bottom
      right
      color="green accent-4"
      elevation="24"
    >
      {{ get_notification_message }}
    </v-snackbar>

  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "to_show_notification",
      "get_notification_message"
    ]),
  },
  methods: {
    ...mapActions([
      "hide_notification"
    ])
  }
};
</script>
