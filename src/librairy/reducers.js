import { combineReducers } from 'redux'

import { appendToArray } from 'helpers/utils'

import { LOGOUT } from 'user/actionsTypes'

import {
  REQUEST_ALBUMS,
  REQUEST_ALBUMS_SUCCESS,
  REQUEST_ALBUMS_FAILURE,

  REQUEST_PICTURES,
  REQUEST_PICTURES_SUCCESS,
  REQUEST_PICTURES_FAILURE,

  REQUEST_TAGS,
  REQUEST_TAGS_SUCCESS,
  REQUEST_TAGS_FAILURE,
  
  ADD_PICTURE,
  UPDATE_PICTURE,
  DELETE_PICTURE,

  ADD_ALBUM,
  UPDATE_ALBUM,
  DELETE_ALBUM,
} from './actionsTypes'

/*

pictures = {
  is_fetching: bool,
  fetched: bool,
  errors: {},
  order: [],
  sha1: {
    sha1: ...,
    description: ...,
  }
}

albums = {
  is_fetching: bool,
  fetched: bool,
  errors: {},
  order: [],
  slug: {
    slug: ...,
    title: ...,
    description: ...,
    pictures: [sha1, sha1, sha1...],
  }
}

tags = [name, name, name]
*/

let default_pictures_state = {
  is_fetching: false,
  fetched: false,
  order: [],
}

function pictures(state = default_pictures_state, action) {
  switch (action.type) {
    case REQUEST_PICTURES:
      return {
        ...state,
        is_fetching: true,
        fetched: false,
        order: []
      }
    case REQUEST_PICTURES_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        fetched: true,
      }
    case REQUEST_PICTURES_FAILURE:
      return {
        ...state,
        is_fetching: false,
        fetched: false,
        errors: action.errors,
      }
    case ADD_PICTURE:
      return {
        ...state,
        [action.sha1]: action.picture,
        order: appendToArray(action.sha1, state.order)
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

let default_albums_state = {
  is_fetching: false,
  fetched: false,
  order: [],
}

function albums(state = default_albums_state, action) {
  switch (action.type) {
    case REQUEST_ALBUMS:
      return {
        ...state,
        is_fetching: true,
        fetched: false,
        order: []
      }
    case REQUEST_ALBUMS_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        fetched: true,
      }
    case REQUEST_ALBUMS_FAILURE:
      return {
        ...state,
        is_fetching: false,
        fetched: false,
        errors: action.errors,
      }
    case ADD_ALBUM:
      return {
        ...state,
        [action.slug]: action.album,
        order: appendToArray(action.slug, state.order)
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

const librairy = combineReducers({
  pictures,
  albums,
})

export default librairy
