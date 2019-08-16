import {
  LOGOUT,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE,
  REQUEST_REFRESH,
  REQUEST_REFRESH_SUCCESS,
  REQUEST_REFRESH_FAILURE,
} from 'user/actionsTypes'

function user(state = {}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        is_logging_in: true,
        usermail: '',
      }
    case REQUEST_LOGIN_SUCCESS:
      return {
        usermail: action.usermail,
      }
    case REQUEST_LOGIN_FAILURE:
      return {
        usermail: '',
        login_errors: action.errors,
      }
    case REQUEST_REFRESH:
      return {
        ...state,
        is_refreshing: true,
      }
    case REQUEST_REFRESH_SUCCESS:
      return {
        usermail: action.usermail,
      }
    case REQUEST_REFRESH_FAILURE:
      return {
        usermail:'',
        refresh_errors: action.errors,
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export default user
