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

function user(state = {}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        is_logging_in: true,
        username: '',
        userslug: '',
      }
    case REQUEST_LOGIN_SUCCESS:
      return {
        username: action.username,
        userslug: action.userslug,
      }
    case REQUEST_LOGIN_FAILURE:
      return {
        username: '',
        userslug: '',
        login_errors: action.errors,
      }
    case REQUEST_REFRESH:
      return {
        ...state,
        is_refreshing: true,
      }
    case REQUEST_REFRESH_SUCCESS:
      return {
        username: action.username,
        userslug: action.userslug,
      }
    case REQUEST_REFRESH_FAILURE:
      return {
        username:'',
        userslug: '',
        refresh_errors: action.errors,
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export default user
