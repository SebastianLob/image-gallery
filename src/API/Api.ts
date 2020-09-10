import axios, {AxiosResponse, AxiosError, AxiosPromise} from 'axios'
import apiStore from '../store/apiStore'
import snackbarStore from '../store/snackbarStore'
import pictureStore from '../store/pictureStore'
import {Method} from '../../types/index'

const Api = {
  actions: {
    async call (
      url: string,
      method: Method,
      data: Object = {},
      params: string = '',
      headers: Object = {}
    ): Promise<AxiosResponse | AxiosError> {
      return new Promise((resolve, reject) => {
        axios({
          baseURL: apiStore.getters.getDefaultUrl(),
          url,
          data,
          params,
          method,
          headers
        }).then((response: AxiosResponse) => {
          resolve(response);
        }).catch(async (error: AxiosError) => {
          reject(error);
        });
      })
    },
    async updateAuthToken(): Promise<Object> {
      return new Promise((resolve, reject) => {
        this.call('auth', 'POST', {apiKey: apiStore.getters.getApiKey()}, '', {}).then((response) => {
          apiStore.dispatch('updateAuthToken', response.data.token);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      })
    },
    showError(): void {
      snackbarStore.dispatch(
        'showError',
        'There was an error communicating with the server. Please try again later.'
      );
    },
    initPictures(): void {
      this.updateAuthToken()
      .then(() => this.loadPictures())
      .catch(() => this.showError());
    },
    loadPictures(params: string = '') {
      return new Promise((resolve, reject) => {
        this.call(
          'images/'+params,
          'GET',
          {},
          '',
          {'Authorization': `Bearer ${apiStore.getters.getAuthToken()}`}
        ).then((response: AxiosPromise) => {
          pictureStore.dispatch('loadPictures', response.data.pictures);
          pictureStore.dispatch('setPageCount', response.data.pageCount);
          resolve();
        }).catch((error) => {
          this.updateAuthToken().then(() => {
            this.loadPictures(params).then((response) => {
              resolve(response);
            });
          }).catch(() => {
            this.showError();
            reject(error);
          })
        });
      })
    },
    findPictureDetails(pictureId: number) {
      return new Promise((resolve, reject) => {
        this.call(
          'images/'+pictureId,
          'GET',
          {},
          '',
          {'Authorization': `Bearer ${apiStore.getters.getAuthToken()}`}
        ).then((response: AxiosPromise) => {
          pictureStore.dispatch('loadPictureDetails', response.data);
          resolve();
        }).catch((error) => {
          this.updateAuthToken().then(() => {
            this.findPictureDetails(pictureId).then((response) => {
              resolve(response);
            });
          }).catch(() => {
            this.showError();
            reject(error);
          })
        });
      })
    },
  }
};

export default Api