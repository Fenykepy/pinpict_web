import * as types from './actionsTypes'
import Fetch from 'helpers/http'



// Select current user
export function selectUser(userslug) {
  return {
    type: types.SELECT_USER,
    userslug,
  }
}

// Get a user

function requestUser(userslug) {
  return {
    type: types.REQUEST_USER,
    userslug,
  }
}

function requestUserSuccess(userslug, user) {
  return {
    type: types.REQUEST_USER_SUCCESS,
    userslug,
    user,
  }
}


function requestUserFailure(userslug, errors) {
  return {
    type: types.REQUEST_USER_FAILURE,
    userslug,
    errors,
  }
}


function shouldFetchUser(state, userslug) {
  const user = state.pinpict.users.userslug
  if (! user) return true
  if (user.is_fetching || user.fetched) return false
  return true
}


export function fetchUserIfNeeded(userslug) {
  return (dispatch, getState) => {
    if ( shouldFetchUser(getState(), userslug) ) {
      return dispatch(fetchUser(userslug))
    }
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}


function fetchUser(userslug) {
  return async function(dispatch) {
    // start request
    dispatch(requestUser(userslug))

    try {
      let json = await Fetch.get(`api/user/${userslug}/public/`)
      dispatch(requestUserSuccess(userslug, json))
    } catch(error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestUserFailure(userslug, json))
      throw error
    }
  }
}


// Get user public boards abstracts

function storeBoardAbstract(boarduserslug, boardabstract) {
  return {
    type: types.STORE_BOARD_ABSTRACT,
    boarduserslug,
    boardabstract,
  }
}

function requestUserPublicBoards(userslug) {
  return {
    type: types.REQUEST_USER_PUBLIC_BOARDS,
    userslug,
  }
}


function requestUserPublicBoardsSuccess(userslug, boards) {
  return {
    type: types.REQUEST_USER_PUBLIC_BOARDS_SUCCESS,
    userslug,
    boards,
  }
}


function requestUserPublicBoardsFailure(userslug, errors) {
  return {
    type: types.REQUEST_USER_PUBLIC_BOARDS_FAILURE,
    userslug,
    errors,
  }
}


function shouldFetchUserPublicBoards(state, userslug) {
  const user = state.pinpict.users.userslug
  if (! user) return true
  if (user.is_fetching_public_boards || user.public_board_fetched) return false
  return true
}


export function fetchUserPublicBoardsIfNeeded(userslug) {
  return (dispatch, getState) => {
    if ( shouldFetchUserPublicBoards(getState(), userslug) ) {
      return dispatch(fetchUserPublicBoards(userslug))
    }
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}


function fetchUserPublicBoards(userslug) {
  return async function(dispatch) {
    // start request
    dispatch(requestUserPublicBoards(userslug))

    try {
      let json = await Fetch.get(`api/board/user/${userslug}/`)
      // keep only boards boarduserslug in array
      // and store other data in boards reducer
      let boards = json.map(abstract => {
        let boarduserslug = `${abstract.slug}@${userslug}`
        dispatch(storeBoardAbstract(boarduserslug, abstract))
        return boarduserslug
      })
      dispatch(requestUserPublicBoardsSuccess(userslug, boards))

    } catch (error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestUserPublicBoardsFailure(userslug, json))
      throw error
    }
  }
}





// Get user private boards abstracts

function requestUserPrivateBoards(userslug) {
  return {
    type: types.REQUEST_USER_PRIVATE_BOARDS,
    userslug,
  }
}


function requestUserPrivateBoardsSuccess(userslug, boards) {
  return {
    type: types.REQUEST_USER_PRIVATE_BOARDS_SUCCESS,
    userslug,
    boards,
  }
}


function requestUserPrivateBoardsFailure(userslug, errors) {
  return {
    type: types.REQUEST_USER_PRIVATE_BOARDS_FAILURE,
    userslug,
    errors,
  }
}


function shouldFetchUserPrivateBoards(state, userslug) {
  const user = state.pinpict.users.userslug
  if (! user) return true
  if (user.is_fetching_private_boards || user.private_board_fetched) return false
  return true
}


export function fetchUserPrivateBoardsIfNeeded(userslug) {
  return (dispatch, getState) => {
    if ( shouldFetchUserPrivateBoards(getState(), userslug) ) {
      return dispatch(fetchUserPrivateBoards(userslug))
    }
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}


function fetchUserPrivateBoards(userslug) {
  return async function(dispatch) {
    // start request
    dispatch(requestUserPrivateBoards(userslug))

    try {
      let json = await Fetch.get(`api/board/private/user/${userslug}/`)
      // keep only boards boarduserslug in array
      // and store other data in boards reducer
      let boards = json.map(abstract => {
        let boarduserslug = `${abstract.slug}@${userslug}`
        dispatch(storeBoardAbstract(boarduserslug, abstract))
        return boarduserslug
      })
      dispatch(requestUserPrivateBoardsSuccess(userslug, boards))

    } catch (error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestUserPrivateBoardsFailure(userslug, json))
      throw error
    }
  }
}









// Get a pin

// Get tags

// Scan url

// Get short board data

// Get full board data














