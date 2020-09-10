import Vue from 'vue'
import Vuex from 'vuex'
import apiStore from './apiStore'
import pictureStore from './pictureStore'
import snackbarStore from './snackbarStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiStore,
    pictureStore,
    snackbarStore
  }
})
