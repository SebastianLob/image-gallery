import Vue from 'vue'
import Vuex from 'vuex'
import {ApiStoreState, AuthToken, Url, ApiKey} from '../../types/index'

Vue.use(Vuex)

const apiStoreState: ApiStoreState = {
  authToken: '',
  defaultUrl: 'http://interview.agileengine.com/',
  apiKey: '23567b218376f79d9415'
};

export default new Vuex.Store({
  state: apiStoreState,
  mutations: {
    updateAuthToken(state: ApiStoreState, payload: string): void {
      state.authToken = payload;
    }
  },
  actions: {
    updateAuthToken(state, payload: string): void {
      this.commit('updateAuthToken', payload)
    }
  },
  getters: {
    getAuthToken: (state: ApiStoreState) => (): AuthToken => state.authToken,
    getDefaultUrl: (state: ApiStoreState) => (): Url => state.defaultUrl,
    getApiKey: (state: ApiStoreState) => (): ApiKey => state.apiKey
  }
})
