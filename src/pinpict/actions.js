import * as types from './actionsTypes'
import Fetch from 'helpers/http'

function setBoarduserslug(userslug, boardslug) {
  return `${boardslug}@${userslug}`
}

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
  const user = state.pinpict.users[userslug]
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
  const user = state.pinpict.users[userslug]
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
      let json = await Fetch.get(`api/board/public/user/${userslug}/`)
      // keep only boards boarduserslug in array
      // and store other data in boards reducer
      let boards = json.map(abstract => {
        let boarduserslug = setBoarduserslug(userslug, abstract.slug)
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
  const user = state.pinpict.users[userslug]
  const authenticated = state.user.authenticatedslug
  // we dont fetch private boards if user isn't authenticated
  if (! authenticated) return false
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
        let boarduserslug = setBoarduserslug(userslug, abstract.slug)
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






// Select pin
export function selectPin(pin_id) {
  return {
    type: types.SELECT_PIN,
    pin_id,
  }
}



// Get a pin

function requestPin(pin_id) {
  return {
    type: types.REQUEST_PIN,
    pin_id,
  }
}


function requestPinSuccess(pin_id, pin) {
  return {
    type: types.REQUEST_PIN_SUCCESS,
    pin_id,
    pin,
  }
}


function requestPinFailure(pin_id, errors) {
  return {
    type: types.REQUEST_PIN_FAILURE,
    pin_id,
    errors,
  }
}


function shouldFetchPin(state, pin_id) {
  const pin = state.pinpict.pins[pin_id]
  if (! pin) return true
  if (pin.is_fetching || pin.fetched) return false
  return true
}


export function fetchPinIfNeeded(pin_id) {
  return (dispatch, getState) => {
    if ( shouldFetchPin(getState(), pin_id) ) {
      //console.log('need to fetch pin')
      return dispatch(fetchPin(pin_id))
    }
    //console.log('no need to fetch pin')
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}


function fetchPin(pin_id) {
  return async function(dispatch, getState) {
    // start request
    dispatch(requestPin(pin_id))
    try {
      let json = await Fetch.get(`api/pin/${pin_id}/`)
      return dispatch(requestPinSuccess(pin_id, json))
    } catch (error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestPinFailure(pin_id, json))
      throw error
    }
  }
}


export function fetchAddedViaIfNeeded(pin_id) {
  return (dispatch, getState) => {
    dispatch(fetchPinIfNeeded(pin_id)).then(() => {
      let pin = getState().pinpict.pins[pin_id]
      dispatch(fetchUserIfNeeded(pin.user))
    })
  }
}


// Get tags





// Scan url

function requestScan(url, full_search) {
  return {
    type: types.REQUEST_SCAN,
    url,
    full_search,
  }
}

function requestScanSuccess(results) {
  return {
    type: types.REQUEST_SCAN_SUCCESS,
    results,
  }
}

function requestScanFailure(errors) {
  return {
    type: types.REQUEST_SCAN_FAILURE,
    errors,
  }
}

function shouldScan(state, url, full_search) {
  const scan = state.pinpict.scan
  if (scan.url === url && scan.full_search === full_search) return false
  return true
}


export function scanIfNeeded(url, full_search=false) {
  return (dispatch, getState) => {
    if (shouldScan(getState(), url, full_search)) {
      return dispatch(scan(url, full_search))
    }
    console.log('no need to scan url')
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}

function scan(url, full_search) {
  return async function(dispatch, getState) {
    // start request
    dispatch(requestScan(url, full_search))
    try {
      let json = await Fetch.post('api/pin/scan/',
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        JSON.stringify({url: url, full_search: full_search})
      )
      // we store search in state
      dispatch(requestScanSuccess(json))
    } catch (error) {
      let json = await error.response.json()
      // store error in state
      console.log('request scan failure', json)
      dispatch(requestScanFailure(json))
      throw error
    }
  }
}





// Select board
export function selectBoard(userslug, boardslug) {
  return {
    type: types.SELECT_BOARD,
    boarduserslug: setBoarduserslug(userslug, boardslug),
  }
}


// Get short board data


function requestShortBoard(boarduserslug) {
  return {
    type: types.REQUEST_SHORT_BOARD,
    boarduserslug,
  }
}


function requestShortBoardSuccess(boarduserslug, board) {
  return {
    type: types.REQUEST_SHORT_BOARD_SUCCESS,
    boarduserslug,
    board,
  }
}


function requestShortBoardFailure(boarduserslug, errors) {
  return {
    type: types.REQUEST_SHORT_BOARD_FAILURE,
    boarduserslug,
    errors,
  }
}


function shouldFetchShortBoard(state, boarduserslug) {
  const board = state.pinpict.boards[boarduserslug]
  if (! board) return true
  if (board.is_fetching_short || board.short_fetched) return false
  return true
}


export function fetchShortBoardIfNeeded(userslug, boardslug) {
  let boarduserslug = setBoarduserslug(userslug, boardslug)
  return (dispatch, getState) => {
    if ( shouldFetchShortBoard(getState(), boarduserslug) ) {
      return dispatch(fetchShortBoard(userslug, boardslug))
    }
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}


function fetchShortBoard(userslug, boardslug) {
  return async function(dispatch) {
    let boarduserslug = setBoarduserslug(userslug, boardslug)
    // start request
    dispatch(requestShortBoard(boarduserslug))

    try {
      let json = await Fetch.get(`api/board/user/${userslug}/board/${boardslug}/`)
      dispatch(requestShortBoardSuccess(boarduserslug, json))
    } catch (error) {
      let json = await error.response.json()
      // store error in state
      dispatch(requestShortBoardFailure(boarduserslug, json))
      throw error
    }
  }
}



// Get full board data







// Create a board

function requestCreateBoard() {
  return {
    type: types.REQUEST_CREATE_BOARD,
  }
}

function requestCreateBoardSuccess(boarduserslug, board) {
  return {
    type: types.REQUEST_CREATE_BOARD_SUCCESS,
    boarduserslug,
    board,
  }
}

function requestCreateBoardFailure(errors) {
  return {
    type: types.REQUEST_CREATE_BOARD_FAILURE,
    errors
  }
}

export function createBoard(data) {
  return async function(dispatch, getState) {
    // start request
    dispatch(requestCreateBoard())
    //console.log('request create board', data)

    try {
      let json = await Fetch.post('api/board/',
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        JSON.stringify(data)
      )
      let boarduserslug = setBoarduserslug(json.user, json.slug)
      // we store board in state
      dispatch(requestCreateBoardSuccess(boarduserslug, json))
      // we upgrade users board's lists
      let user = getState().pinpict.users[json.user]
      if (json.private) {
        let boards = user.private_boards.slice()
        boards.push(boarduserslug)
        dispatch(requestUserPrivateBoardsSuccess(json.user, boards))
      } else {
        let boards = user.public_boards.slice()
        boards.push(boarduserslug)
        dispatch(requestUserPublicBoardsSuccess(json.user, boards))
      }

    } catch (error) {
      let json = await error.response.json()
      // store error in state
      console.log('request create board failure', json)
      dispatch(requestCreateBoardFailure(json))
      throw error
    }
  }
}


// Upload a pin

export function resetCreatePin() {
  return {
    type: types.RESET_CREATE_PIN
  }
}

function requestUploadPin() {
  return {
    type: types.REQUEST_UPLOAD_PIN,
  }
}

function requestUploadPinSuccess(pin) {
  return {
    type: types.REQUEST_UPLOAD_PIN_SUCCESS,
    pin,
  }
}

function requestUploadPinFailure(errors) {
  return {
    type: types.REQUEST_UPLOAD_PIN_FAILURE,
    errors,
  }
}

export function uploadPin(data) {
  return async function(dispatch, getState) {
    // start request
    dispatch(requestUploadPin())
    console.log('request upload pin', data)
    try {
      let fd = new FormData()
      fd.append('board', data.board)
      fd.append('description', data.description)
      fd.append('source_file', data.source_file)
      let json = await Fetch.post('api/pin/',
        {},
        fd
      )
      dispatch(requestUploadPinSuccess(json))
    } catch (error) {
      let json = await error.response.json()
      // store error in state
      console.log('request upload pin failure', json)
      dispatch(requestUploadPinFailure(json))
      //throw error
    }
  }
}



// update a pin
function requestUpdatePin(pin_id) {
  return {
    type: types.REQUEST_UPDATE_PIN,
    pin_id
  }
}

function requestUpdatePinSuccess(pin_id, pin) {
  return {
    type: types.REQUEST_UPDATE_PIN_SUCCESS,
    pin_id,
    pin,
  }
}

function requestUpdatePinFailure(pin_id, errors) {
  return {
    type: types.REQUEST_UPDATE_PIN_FAILURE,
    pin_id,
    errors,
  }
}

export function updatePin(pin_id, data) {
  return async function(dispatch, getState) {
    // start request
    dispatch(requestUpdatePin(pin_id))
    //console.log('request update pin', data)
    try {
      let json = await Fetch.patch(`api/pin/${pin_id}/`,
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        JSON.stringify(data)
      )
      dispatch(requestUpdatePinSuccess(pin_id, json))
    } catch (error) {
      let json = await error.response.json()
      // store error in state
      console.log('request update pin failure', json)
      dispatch(requestUpdatePinFailure(pin_id, json))
      //throw error
    }
  }
}







