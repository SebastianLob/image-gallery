<template>
  <v-app>
    <App-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <Snackbar/>
    <Loading-dialog/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from './components/App-bar.vue';
import Snackbar from './components/Snackbar.vue';
import LoadingDialog from './components/Loading-dialog.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppBar,
    Snackbar,
    LoadingDialog
  },
});
</script>
