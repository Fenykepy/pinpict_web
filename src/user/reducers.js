
import {
  LOGOUT,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE,
  REQUEST_REFRESH,
  REQUEST_REFRESH_SUCCESS,
  REQUEST_REFRESH_FAILURE,
  REQUEST_CURRENT_USER,
  REQUEST_CURRENT_USER_SUCCESS,
  REQUEST_CURRENT_USER_FAILURE,
} from 'user/actionsTypes'

export default function user(state = {}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        is_logging_in: true,
        username: '',
        authenticated_slug: '',
      }
    case REQUEST_LOGIN_SUCCESS:
      return {
        username: action.username,
        authenticated_slug: action.authenticated_slug,
      }
    case REQUEST_LOGIN_FAILURE:
      return {
        username: '',
        authenticated_slug: '',
        login_errors: action.errors,
      }
    case REQUEST_REFRESH:
      return {
        ...state,
        is_refreshing: true,
      }
    case REQUEST_REFRESH_SUCCESS:
      return {
        ...state,
        is_refreshing: false,
        username: action.username,
        authenticated_slug: action.authenticated_slug,
      }
    case REQUEST_REFRESH_FAILURE:
      return {
        username:'',
        authenticated_slug: '',
        refresh_errors: action.errors,
      }
    case REQUEST_CURRENT_USER:
      return {
        ...state,
        is_fetching: true,
        fetched: false,
      }
    case REQUEST_CURRENT_USER_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        fetched: true,
        ...action.user,
      }
    case REQUEST_CURRENT_USER_FAILURE:
      return {
        ...state,
        is_fetching: false,
        fetched: false,
        fetch_errors: action.errors,
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

