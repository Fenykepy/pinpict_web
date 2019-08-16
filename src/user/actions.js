import * as types from './actionsTypes'
import { setCookie, deleteCookie } from 'helpers/cookieManager'

import Fetch from 'helpers/http'
// actions creators

// Logging in
function requestLogin() {
  return {
    type: types.REQUEST_LOGIN
  }
}

function requestLoginSuccess(usermail) {
  return {
    type: types.REQUEST_LOGIN_SUCCESS,
    usermail
  }
}

function requestLoginFailure(errors) {
  return {
    type: types.REQUEST_LOGIN_FAILURE,
    errors
  }
}

export function login(credentials) {
  /*
   * try to get token with given credentials
   */
  return function(dispatch) {
    let usermail = credentials.email
    // start request
    dispatch(requestLogin())

    // return a promise
    return Fetch.post('api/user/token/',
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      JSON.stringify(credentials)
    )
    .then(json => {
      // store usermail in cookie
      setCookie('usermail', usermail)
      // store access token in cookie
      setCookie('access_token', json.access)
      // TODO store refresh token in cookie
      setCookie('refresh_token', json.refresh)
      // TODO start timer to refresh token
      dispatch(requestLoginSuccess(usermail))
    })
    .catch(error => {
      error.response.json().then(json => {
        // store error in state
        dispatch(requestLoginFailure(json))
        throw json
      })
    })
  }
}


// logout
export function logout() {
  // delete access and refresh token
  deleteCookie('usermail')
  deleteCookie('access_token')
  deleteCookie('refresh_token')
  return {
    type: types.LOGOUT
  }
}
