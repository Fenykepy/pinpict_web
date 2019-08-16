import * as types from './actionsTypes'
import { getCookie, setCookie, deleteCookie } from 'helpers/cookieManager'

import Fetch from 'helpers/http'
// actions creators

// Logging in

function storeAuth(access, refresh, usermail) {
  // store usermail in cookie
  setCookie('usermail', usermail)
  // store access token in cookie
  setCookie('access_token', access)
  // store refresh token in cookie
  setCookie('refresh_token', refresh)
}

function readJWT(token) {
  return JSON.parse(atob(token.split('.')[1]))
}

function refreshAuthTimer(access, dispatch) {
  let jwt = readJWT(access)
  let now = Math.floor(Date.now()/1000)
  let delay = (jwt.exp - now - 30) * 1000
  setTimeout(() => dispatch(refresh()), delay)
}

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
      storeAuth(json.access, json.refresh, usermail)
      // start timer to refresh token
      refreshAuthTimer(json.access, dispatch)
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


// refresh token
function requestRefresh() {
  return {
    type: types.REQUEST_REFRESH
  }
}

function requestRefreshSuccess(usermail) {
  return {
    type: types.REQUEST_REFRESH_SUCCESS,
    usermail
  }
}

function requestRefreshFailure(errors) {
  return {
    type: types.REQUEST_REFRESH_FAILURE,
    errors
  }
}

export function refresh() {
  /*
   * try to refresh token
   */
  return function(dispatch) {
    let usermail = getCookie('usermail')
    let refresh_token = getCookie('refresh_token')

    if (! usermail || ! refresh_token) {
      // nothing to refresh, logout
      dispatch(logout())
    }

    // start request
    dispatch(requestRefresh())

    // return a promise
    return Fetch.post('api/user/token/refresh/',
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      JSON.stringify({refresh: refresh_token})
    )
    .then(json => {
      storeAuth(json.access, json.refresh, usermail)
      // start timer to refresh token
      refreshAuthTimer(json.access, dispatch)
      dispatch(requestRefreshSuccess(usermail))
    })
    .catch(error => {
      error.response.json().then(json => {
        // store error in state
        dispatch(requestRefreshFailure(json))
        dispatch(logout())
        throw json
      })
    })
  }
}
