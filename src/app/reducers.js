
import {
  PICTURES_MODULE,
  SET_MODULE,
  SET_PICTURE,
  SET_ALBUM,
  SET_ALBUM_PICTURE,
} from 'app/actionsTypes'


let navigation_default_state = {
  module: PICTURES_MODULE,
  picture: '',
  album: '',
  album_picture: '',
}

export default function navigation(state = navigation_default_state, action) {
  switch (action.type) {
    case SET_MODULE:
      return {
        ...state,
        module: action.module,
      }
    case SET_PICTURE:
      return {
        ...state,
        picture: action.picture,
      }
    case SET_ALBUM:
      return {
        ...state,
        album: action.album,
      }
    case SET_ALBUM_PICTURE:
      return {
        ...state,
        album_picture: action.album_picture,
      }
    default:
      return state
  }
}

