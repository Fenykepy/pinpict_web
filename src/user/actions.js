import * as types from './actionsTypes'
import { getCookie, setCookie, deleteCookie } from 'helpers/cookieManager'
import Fetch from 'helpers/http'


// Logging in

function storeAuth(access, refresh, username) {
  // store username in cookie
  setCookie('username', username)
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

function fetchCommonData(dispatch) {
  dispatch(fetchCurrentUserIfNeeded())
}


function requestLogin() {
  return {
    type: types.REQUEST_LOGIN
  }
}

function requestLoginSuccess(username, userslug) {
  return {
    type: types.REQUEST_LOGIN_SUCCESS,
    username,
    userslug
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
  return async function(dispatch) {
    let username = credentials.username
    // start request
    dispatch(requestLogin())

    try {
      let json = await Fetch.post('api/user/token/',
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        JSON.stringify(credentials)
      )
      storeAuth(json.access, json.refresh, username)
      let userslug = readJWT(json.access).slug
      // start timer to refresh token
      refreshAuthTimer(json.access, dispatch)
      dispatch(requestLoginSuccess(username, userslug))
      // we fetch common data
      fetchCommonData(dispatch)
    } catch(error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestLoginFailure(json))
      throw error
    }
  }
}


// logout
export function logout() {
  // delete access and refresh token
  deleteCookie('username')
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

function requestRefreshSuccess(username, userslug) {
  return {
    type: types.REQUEST_REFRESH_SUCCESS,
    username,
    userslug
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
  return async function(dispatch) {
    let username = getCookie('username')
    let refresh_token = getCookie('refresh_token')

    if (! username || ! refresh_token) {
      // nothing to refresh, logout
      return dispatch(logout())
    }

    // start request
    dispatch(requestRefresh())

    try {
      let json = await Fetch.post('api/user/token/refresh/',
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        JSON.stringify({refresh: refresh_token})
      )
      storeAuth(json.access, json.refresh, username)
      let userslug = readJWT(json.access).slug
      // start timer to refresh token
      refreshAuthTimer(json.access, dispatch)
      dispatch(requestRefreshSuccess(username, userslug))
      // we fetch common data
      fetchCommonData(dispatch)
    } catch(error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestRefreshFailure(json))
      dispatch(logout())
      throw error
    }
  }
}



function requestCurrentUser() {
  return {
    type: types.REQUEST_CURRENT_USER
  }
}

function requestCurrentUserSuccess(user) {
  return {
    type: types.REQUEST_CURRENT_USER_SUCCESS,
    user
  }
}

function requestCurrentUserFailure(errors) {
  return {
    type: types.REQUEST_CURRENT_USER_FAILURE,
    errors
  }
}


function shouldFetchCurrentUser(state) {
  const user = state.user
  if (! user) return true
  if (user.is_fetching || user.fetched) return false
  return true
}



function fetchCurrentUserIfNeeded() {
  return (dispatch, getState) => {
    if ( shouldFetchCurrentUser(getState()) ) {
      return dispatch(fetchCurrentUser())
    }
  }
  // else return a resolved promise
  return new Promise((resolve, reject) => resolve())
}


function fetchCurrentUser() {
  return async function(dispatch) {
    // start request
    dispatch(requestCurrentUser())
    
    try {
      let json = await Fetch.get('api/user/current/')
      dispatch(requestCurrentUserSuccess(json))
    } catch(error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestCurrentUserFailure(json))
      throw error
    }
  }
}
