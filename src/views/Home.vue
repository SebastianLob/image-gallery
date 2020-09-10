<template>
  <v-app>
    <v-container class="mt-10">
      <v-main>
        <v-card class="mx-auto" elevation="0">
          <v-container>
            <v-row dense>
              <v-col sm="6" md="4" lg='3' v-for="(picture, i) in pictures" :key="i">
                <v-hover v-slot:default="{hover}">
                  <v-img
                    @click="pictureDetails(i)"
                    class='rounded-circle ma-1 picture'
                    :lazy-src="picture.cropped_picture"
                    :src="picture.cropped_picture">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                    <v-fade-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Details
                      </div>
                    </v-fade-transition>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <vue-easy-lightbox
          id='magnifier'
          :visible="visible"
          :imgs="pictures"
          :index="index"
          @hide="visible = false"
          @on-index-change='changePicture'
          v-if='visible'
        />
        <Share-button v-if='visible' :pictureUrl='pictures[index].src' id='shareButton'/>
        <div class="text-center">
          <v-pagination
            id='paginator'
            v-model="page"
            :circle="false"
            :disabled="loadingPictures"
            :length="paginationLength"
            :next-icon="'mdi-chevron-right'"
            :prev-icon="'mdi-chevron-left'"
            :page="page"
            :total-visible="totalVisible"
            color="secondary"
          ></v-pagination>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang='ts'>
  import pictureStore from '../store/pictureStore'
  import snackbarStore from '../store/snackbarStore'
  import Api from '../API/Api'
  import {Id, PicturesArray} from '../../types';
  import Vue from 'vue'
  import Lightbox from 'vue-easy-lightbox'
  import ShareButton from '../components/Share-button.vue'
  Vue.use(Lightbox)

  export default {
    name: 'Home',
    components: {
      ShareButton
    },
    data: () => ({
      visible: false,
      index: 0,
      imgUrl: '',
      page: 1,
      totalVisible: 10,
      loadingPictures: false,
      author: '',
      camera: '',
      tags: ''
    }),
    created() {
      pictureStore.dispatch('loadingPictures');
      Api.actions.initPictures();
    },
    computed: {
      pictures(): PicturesArray {
        return pictureStore.state.pictures;
      },
      paginationLength(): number {
        return pictureStore.state.pageCount;
      }
    },
    methods: {
      changePicture(oldIndex, newIndex) {
        this.visible = false;
        pictureStore.dispatch('loadingPictures');
        this.pictureDetails(newIndex);
      },
      pictureDetails(index: number) {
        const picture = this.pictures[index];
        if (picture.full_picture !== undefined) {
          this.showViewer(index);
          return;
        }
        Api.actions.findPictureDetails(picture.id).then(() => {
          this.showViewer(index);
        });
      },
      showViewer(index: number) {
        this.index = index;
        const picture = this.pictures[index];
        this.author = picture.author;
        this.camera = picture.camera;
        this.tags = picture.tags;
        this.visible = true
        pictureStore.dispatch('picturesLoaded');
      }
    },
    watch: {
      page(val: number): void {
        this.loadingPictures = true;
        pictureStore.dispatch('loadingPictures');
        Api.actions.loadPictures(`?page=${this.page}`).finally(() => this.loadingPictures = false);
      }
    }
  }
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>