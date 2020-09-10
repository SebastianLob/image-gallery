export type Method = 'GET' | 'POST';

export type AuthToken = string | null;

export type Url = string;

export type ApiKey = string;

export type Id = string;

export type PicturesArray = Array<Picture>;

export type SnackbarMsg = string;

export type SnackbarMsgClass = 'error' | 'success' | 'warning';


export interface ApiStoreState {
  authToken: AuthToken,
  defaultUrl: Url,
  apiKey: ApiKey
}

export interface Picture {
  id: Id;
  src: string,
  cropped_picture: string;
  author?: string;
  camera?: string;
  tags?: string;
  full_picture?: string
}

export interface PictureStoreState {
  pictures: PicturesArray,
  pageCount: number,
  loadingPictures: boolean
}

export interface SnackbarStoreState {
  msg: SnackbarMsg,
  msgClass: SnackbarMsgClass,
  show: boolean
}