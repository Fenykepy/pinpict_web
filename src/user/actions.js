import * as types from './actionsTypes'

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
    let usermail = credentials.usermail
    // start request
    dispatch(requestLogin())

    // return a promise
    return Fetch.post('/api/user/token/',
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      JSON.stringify(credentials)
    )
    .then(json =>
      dispatch(requestLoginSuccess(usermail))
    )
    .catch(error => {
      error.response.json().then(json => {
        // store error in state
        dispatch(requestLoginFailure(json))
        throw json
      })
    })
  }
}

