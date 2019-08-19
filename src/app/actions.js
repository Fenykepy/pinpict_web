import * as types from './actionsTypes'

export function setModule(module) {
  return {
    type: types.SET_MODULE,
    module,
  }
}

export function setAllSelected(sha1) {
  return {
    type: types.SET_ALL_SELECTED,
    all_selected: sha1,
  }
}

export function setAlbum(album) {
  return {
    type: types.SET_ALBUM,
    album,
  }
}

export function setAlbumSelected(sha1) {
  return {
    type: types.SET_ALBUM_SELECTED,
    album_selected: sha1,
  }
}
