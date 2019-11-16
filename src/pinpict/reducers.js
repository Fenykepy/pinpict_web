import { combineReducers } from 'redux'

import { 
  LOGOUT,
} from 'user/actionsTypes'

import {
  CLOSE_MODAL,
} from 'modal/actionsTypes'

import {
  REQUEST_USER,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILURE,

  REQUEST_USER_PUBLIC_BOARDS,
  REQUEST_USER_PUBLIC_BOARDS_SUCCESS,
  REQUEST_USER_PUBLIC_BOARDS_FAILURE,

  REQUEST_USER_PRIVATE_BOARDS,
  REQUEST_USER_PRIVATE_BOARDS_SUCCESS,
  REQUEST_USER_PRIVATE_BOARDS_FAILURE,

  REQUEST_PIN,
  REQUEST_PIN_SUCCESS,
  REQUEST_PIN_FAILURE,

  REQUEST_TAGS,
  REQUEST_TAGS_SUCCESS,
  REQUEST_TAGS_FAILURE,

  REQUEST_SCAN,
  REQUEST_SCAN_SUCCESS,
  REQUEST_SCAN_FAILURE,

  REQUEST_SHORT_BOARD,
  REQUEST_SHORT_BOARD_SUCCESS,
  REQUEST_SHORT_BOARD_FAILURE,

  REQUEST_FULL_BOARD,
  REQUEST_FULL_BOARD_SUCCESS,
  REQUEST_FULL_BOARD_FAILURE,

  REQUEST_CREATE_BOARD,
  REQUEST_CREATE_BOARD_SUCCESS,
  REQUEST_CREATE_BOARD_FAILURE,

  RESET_CREATE_PIN,

  REQUEST_UPLOAD_PIN,
  REQUEST_UPLOAD_PIN_SUCCESS,
  REQUEST_UPLOAD_PIN_FAILURE,

  STORE_BOARD_ABSTRACT,

  SELECT_USER,
  SELECT_BOARD,
  SELECT_PIN,

} from 'pinpict/actionsTypes'


function users(state = {}, action) {
  switch (action.type) {
      case REQUEST_USER:
          return {
            ...state,
            [action.userslug]: {
              is_fetching: true,
              fetched: false,
            }
          }
      case REQUEST_USER_SUCCESS:
          return {
            ...state,
            [action.userslug]: {
              is_fetching: false,
              fetched: true,
              ...action.user,
            }
          }
      case REQUEST_USER_FAILURE:
          return {
            ...state,
            [action.userslug]: {
              is_fetching: false,
              fetched: false,
              errors: action.errors,
            }
          }
      case REQUEST_USER_PUBLIC_BOARDS:
          return {
            ...state,
            [action.userslug]: {
              ...state[action.userslug],
              is_fetching_public_boards: true,
              public_boards_fetched: false,
            }
          }
      case REQUEST_USER_PUBLIC_BOARDS_SUCCESS:
          return {
            ...state,
            [action.userslug]: {
              ...state[action.userslug],
              is_fetching_public_boards: false,
              public_boards_fetched: true,
              public_boards: action.boards,
            }
          }
      case REQUEST_USER_PUBLIC_BOARDS_FAILURE:
          return {
            ...state,
            [action.userslug]: {
              ...state[action.userslug],
              is_fetching_public_boards: false,
              public_boards_fetched: false,
              public_boards_errors: action.errors,
            }
          }
      case REQUEST_USER_PRIVATE_BOARDS:
          return {
            ...state,
            [action.userslug]: {
              ...state[action.userslug],
              is_fetching_private_boards: true,
              private_boards_fetched: false,
            }
          }
      case REQUEST_USER_PRIVATE_BOARDS_SUCCESS:
          return {
            ...state,
            [action.userslug]: {
              ...state[action.userslug],
              is_fetching_private_boards: false,
              private_boards_fetched: true,
              private_boards: action.boards,
            }
          }
      case REQUEST_USER_PRIVATE_BOARDS_FAILURE:
          return {
            ...state,
            [action.userslug]: {
              ...state[action.userslug],
              is_fetching_private_boards: false,
              private_boards_fetched: false,
              private_boards_errors: action.errors,
            }
          }
      default:
          return state
  }
}


function tags(state = {}, action) {
  switch (action.type) {
      case REQUEST_TAGS:
          return {
            ...state,
            is_fetching: true,
          }
      case REQUEST_TAGS_SUCCESS:
          return {
            is_fetching: false,
            fetched: true,
            tags: action.tags
          }
      case REQUEST_TAGS_FAILURE:
          return {
            ...state,
            is_fetching: false,
            fetched: false,
            errors: action.errors,
          }
      default:
          return state
  }
}


function scan(state = {}, action) {
  switch (action.type) {
      case REQUEST_SCAN:
          return {
            is_scanning: true,
            scanned: false,
            full_search: action.full_search,
            url: action.url,
            results: []
          }
      case REQUEST_SCAN_SUCCESS:
          return {
            is_scanning: false,
            scanned: true,
            full_search: action.full_search,
            url: action.url,
            results: action.results,
          }
      case REQUEST_SCAN_FAILURE:
          return {
            is_scanning: false,
            scanned: false,
            errors: action.errors,
          }
      case LOGOUT:
          return {}
      default:
          return state
  }
}


function boards(state = {}, action) {
  switch (action.type) {
      case STORE_BOARD_ABSTRACT:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              abstract: true,
              ...action.boardabstract,
            }
          }
      case REQUEST_SHORT_BOARD:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              is_fetching_short: true,
              short_fetched: false,
            }
          }
      case REQUEST_SHORT_BOARD_SUCCESS:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              is_fetching_short: false,
              short_fetched: true,
              ...action.board,
            }
          }
      case REQUEST_SHORT_BOARD_FAILURE:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              is_fetching_short: false,
              short_fetched: false,
              short_errors: action.errors,
            }
          }
      case REQUEST_FULL_BOARD:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              is_fetching_full: true,
              full_fetched: false,
            }
          }
      case REQUEST_FULL_BOARD_SUCCESS:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              is_fetching_full: false,
              full_fetched: true,
              ...action.board,
            }
          }
      case REQUEST_FULL_BOARD_FAILURE:
          return {
            ...state,
            [action.boarduserslug]: {
              ...state[action.boarduserslug],
              is_fetching_full: false,
              full_fetched: false,
              full_errors: action.errors,
            }
          }
      case REQUEST_CREATE_BOARD_SUCCESS:
          return {
            ...state,
            [action.boarduserslug]: {
              is_fetching_full: false,
              full_fetched: true,
              ...action.board,
            }
          }
      case LOGOUT:
          return {}
      default:
          return state
  }
}

function create_board(state = {}, action) {
  switch (action.type) {
      case REQUEST_CREATE_BOARD:
          return {
            is_creating: true,
          }
      case REQUEST_CREATE_BOARD_SUCCESS:
          return {
            created: true,
          }
      case REQUEST_CREATE_BOARD_FAILURE:
          return {
            errors: action.errors,
          }
      case CLOSE_MODAL:
          return {}
      case LOGOUT:
          return {}
      default:
          return state
  }
}

function pins(state = {}, action) {
  switch (action.type) {
      case REQUEST_PIN:
          return {
            ...state,
            [action.pin_id]: {
              ...state[action.pin_id],
              id: action.pin_id,
              is_fetching: true,
            }
          }
      case REQUEST_PIN_SUCCESS:
          return {
            ...state,
            [action.pin_id]: {
              is_fetching: false,
              fetched: true,
              ...action.pin,
            }
          }
      case REQUEST_PIN_FAILURE:
          return {
            ...state,
            [action.pin_id]: {
              ...state[action.pin_id],
              id: action.pin_id,
              is_fetching: false,
              fetched: true,
              errors: action.errors,
            }
          }
      case REQUEST_UPLOAD_PIN_SUCCESS:
          return {
            ...state,
            [action.pin.id]: {
              is_fetching: false,
              fetched: true,
              ...action.pin,
            }
          }
      case LOGOUT:
          return {}
      default:
          return state
  }
}



function create_pin(state={}, action) {
  switch (action.type) {
      case REQUEST_UPLOAD_PIN:
          return {
            is_uploading: true,
          }
      case REQUEST_UPLOAD_PIN_SUCCESS:
          return {
            uploaded: true,
            pin: action.pin,
          }
      case REQUEST_UPLOAD_PIN_FAILURE:
          return {
            errors: action.errors,
          }
      case RESET_CREATE_PIN:
          return {}
      case LOGOUT:
          return {}
      default:
          return state
  }
}



function selected_userslug(state = '', action) {
  switch (action.type) {
      case SELECT_USER:
          return action.userslug
      case LOGOUT:
          return ''
      default:
          return state
  }
}


function selected_boarduserslug(state = '', action) {
  switch (action.type) {
      case SELECT_BOARD:
          return action.boarduserslug
      case LOGOUT:
          return ''
      default:
          return state
  }
}


function selected_pin_id(state = '', action) {
  switch (action.type) {
      case SELECT_PIN:
          return action.pin_id
      case LOGOUT:
          return ''
      default:
          return state
  }
}


const pinpict = combineReducers({
  users,
  tags,
  scan,
  pins,
  boards,
  create_board,
  create_pin,
  selected_userslug,
  selected_boarduserslug,
  selected_pin_id,
})

export default pinpict
