<template>
  <v-btn
      color="secondary"
      dark
      x-small
      fixed
      bottom
      right
      fab
      dense
      style='z-index: 9999;'
      @click="copyToClipboard"
    >
      <v-icon id='icon-share'>mdi-share-variant</v-icon>
    </v-btn>
</template>

<script>
import snackbarStore from '../store/snackbarStore';

export default {
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.pictureUrl);
      alert('Picture URL copied to clipboard!');
    },
  },
  props:{
    pictureUrl:{
      type: String,
      required: true
    }
  }
}
</script>