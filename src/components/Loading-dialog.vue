<template>
  <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
  >
    <v-card
      color="secondary"
      dark
    >
    <v-card-title>
      Loading...
      <v-progress-linear indeterminate color="white" class="my-3"/>
    </v-card-title>
    </v-card>
</v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import pictureStore from '../store/pictureStore';

export default Vue.extend({
  name: 'Loading-dialog',
  computed: {
    loading() {
      return pictureStore.state.loadingPictures;
    }
  }
});
</script>
