import Vue from 'vue'
import Vuex from 'vuex'
import {SnackbarStoreState, SnackbarMsg} from '../../types/index'

Vue.use(Vuex)

const snackbarStoreState: SnackbarStoreState = {
  msg: '',
  msgClass: 'error',
  show: false
};

export default new Vuex.Store({
  state: snackbarStoreState,
  mutations: {
    showError(state: SnackbarStoreState, payload: SnackbarMsg): void {
      state.msg = payload;
      state.msgClass = 'error';
      state.show = true;
    },
    showSuccess(state: SnackbarStoreState, payload: SnackbarMsg): void {
      state.msg = payload;
      state.msgClass = 'success';
      state.show = true;
    },
    hideSnackbar(state: SnackbarStoreState): void {
      state.show = false;
    }
  },
  actions: {
    showError(state, payload: SnackbarMsg): void {
      this.commit('showError', payload);
    },
    showSuccess(state, payload: SnackbarMsg): void {
      this.commit('showSuccess', payload);
    },
    hideSnackbar(state): void {
      this.commit('hideSnackbar');
    },
  }
})
