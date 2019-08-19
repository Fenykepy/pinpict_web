
import {
  ALBUMS_MODULE,
  PICTURES_MODULE,
  SET_MODULE,
  SET_ALL_SELECTED,
  SET_ALBUM,
  SET_ALBUM_SELECTED,
} from 'app/actionsTypes'


let navigation_default_state = {
  module: PICTURES_MODULE,
  all_selected: '',
  album: '',
  album_selected: '',
}


function setModule(state, new_module) {
  let new_state = {...state}
  // if we don't change module, we reset submodules
  if (new_state.module === new_module && new_state.module === ALBUMS_MODULE) {
    new_state.album = ''
    new_state.album_selected = ''
  }
  if (new_state.module === new_module && new_state.module === PICTURES_MODULE) {
    new_state.all_selected = ''
  }
  new_state.module = new_module
  return new_state
}


export default function navigation(state = navigation_default_state, action) {
  switch (action.type) {
    case SET_MODULE:
      return setModule(state, action.module)
    case SET_ALL_SELECTED:
      return {
        ...state,
        all_selected: action.all_selected,
      }
    case SET_ALBUM:
      return {
        ...state,
        album: action.album,
      }
    case SET_ALBUM_SELECTED:
      return {
        ...state,
        album_selected: action.album_selected,
      }
    default:
      return state
  }
}

