import * as types from './actionsTypes'

export function setModule(module) {
  return {
    type: types.SET_MODULE,
    module,
  }
}

export function setPicture(picture) {
  return {
    type: types.SET_PICTURE,
    picture,
  }
}

export function setAlbum(album) {
  return {
    type: types.SET_ALBUM,
    album,
  }
}

export function setAlbumPicture(picture) {
  return {
    type: types.SET_ALBUM_PICTURE,
    album_picture: picture,
  }
}
