import Vue from 'vue'
import Vuex from 'vuex'
import {PictureStoreState, PicturesArray, Picture} from '../../types/index'

Vue.use(Vuex)

const pictureStoreState: PictureStoreState = {
  pictures: [],
  pageCount: 1,
  loadingPictures: false
};

export default new Vuex.Store({
  state: pictureStoreState,
  mutations: {
    loadPictures(state: PictureStoreState, payload: Array<Object>): void {
      state.pictures = payload.map((picture) => {
        picture.src = picture.cropped_picture;
        return picture;
      })
      state.loadingPictures = false;
    },
    setPageCount(state: PictureStoreState, payload: number): void {
      state.pageCount = payload;
      state.loadingPictures = false;
    },
    loadingPictures(state: PictureStoreState): void {
      state.loadingPictures = true;
    },
    loadPictureDetails(state: PictureStoreState, payload: Picture): void {
      const pictureIndex = state.pictures.findIndex(picture => picture.id === payload.id);
      payload.src = payload.full_picture;
      payload.title = `Author: ${payload.author} - Camera: ${payload.camera} - Tags: ${payload.tags}`;
      state.pictures[pictureIndex] = payload;
      const asd = state.pictures;
    },
    picturesLoaded(state: PictureStoreState): void {
      state.loadingPictures = false;
    },
  },
  actions: {
    loadPictures(state, payload: PicturesArray): void {
      this.commit('loadPictures', payload)
    },
    setPageCount(state, payload: number): void {
      this.commit('setPageCount', payload)
    },
    loadingPictures(state): void {
      this.commit('loadingPictures')
    },
    loadPictureDetails(state, payload: Picture): void {
      this.commit('loadPictureDetails', payload)
    },
    picturesLoaded(state): void {
      this.commit('picturesLoaded')
    },
  }
})
