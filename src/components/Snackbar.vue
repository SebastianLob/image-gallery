<template>
  <div class="snackbar-wrapper" style='z-index: 9999;' :timeout="'0'">
    <v-snackbar v-model="show" top :color="msgClass">
      {{msg}}
      <template v-slot:action="{attrs}">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import snackbarStore from '../store/snackbarStore';

export default {
  data: () => ({
    snackbar: false
  }),
  computed: {
    msg() {
      return snackbarStore.state.msg;
    },
    msgClass() {
      return snackbarStore.state.msgClass;
    },
    show() {
      return snackbarStore.state.show;
    },
  },
  methods: {
    closeSnackbar() {
      snackbarStore.dispatch('hideSnackbar')
    }
  }
}
</script>
<style scoped>
  .snackbar-wrapper {
    position: fixed;
    height: 100%;
    width: 100%;
    pointer-events: none;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>
