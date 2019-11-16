
import {
  createSelector,
  createStructuredSelector
} from 'reselect'

import { userBoardsSelector } from 'user/selectors'

const boardsSelector = state => state.pinpict.boards
const pinsSelector = state => state.pinpict.pins
const usersSelector = state => state.pinpict.users
const selectedUserslugSelector = state => state.pinpict.selected_userslug
const selectedBoarduserslugSelector = state => state.pinpict.selected_boarduserslug
const selectedPinidSelector = state => state.pinpict.selected_pin_id
const createBoardSelector = state => state.pinpict.create_board
const createPinSelector = state => state.pinpict.create_pin

const selectedUserSelector = createSelector(
  usersSelector, selectedUserslugSelector,
  (users, userslug) => {
    if (userslug && users[userslug]) {
      return users[userslug]
    }
    return {}
  }
)

const publicBoardsSelector = createSelector(
  selectedUserSelector, boardsSelector,
  (user, boards) => {
    if (user.public_boards) {
      return user.public_boards.map(boarduserslug => 
          boards[boarduserslug]
      )
    }
    return []
  }
)

const privateBoardsSelector = createSelector(
  selectedUserSelector, boardsSelector,
  (user, boards) => {
    if (user.private_boards) {
      return user.private_boards.map(boarduserslug => 
          boards[boarduserslug]
      )
    }
    return []
  }
)

const selectedBoardSelector = createSelector(
  boardsSelector, selectedBoarduserslugSelector,
  (boards, boarduserslug) => {
    if (boards[boarduserslug]) return boards[boarduserslug]
    return {}
  }
)

const defaultBoardSlugSelector = createSelector(
  selectedBoarduserslugSelector, userBoardsSelector,
  (boarduserslug, boards) => {
    // Select pin creation / edition  default board:
    // Last visited board if any
    // First board of list otherwise
    // If no board, null, it shouldn't append, because add pin 
    // link is only available in board detail page
    console.log(boarduserslug)
    if (boarduserslug) return boarduserslug.split('@')[0]
    if (boards.boards.length > 0) return boards.boards[0].slug
    return ""
  }
)

const selectedBoardPinsSelector = createSelector(
  selectedBoardSelector, pinsSelector,
  (board, pins) => {
    if (board && board.pins) {
      let board_pins = []
      for (const pin_id of board.pins) {
        if (pins[pin_id]) {board_pins.push(pins[pin_id])}
      }
      return board_pins
    }
    return []
  }
)

const selectedPinSelector = createSelector(
  selectedPinidSelector, pinsSelector,
  (pin_id, pins) => {
    if (pins[pin_id]) return pins[pin_id]
    return {}
  }
)

const addedViaUserslugSelector = createSelector(
  selectedPinSelector, pinsSelector,
  (pin, pins) => {
    if (pin.added_via && pins[pin.added_via]) {
      return pins[pin.added_via].user
    }
    return ''
  }
)

const addedViaUserSelector = createSelector(
  addedViaUserslugSelector, usersSelector,
  (userslug, users) => {
    if (userslug && users[userslug]) {
      return users[userslug]
    }
    return {}
  }
)



export const boardsListSelector = createStructuredSelector({
  user: selectedUserSelector,
  public_boards: publicBoardsSelector,
  private_boards: privateBoardsSelector,
  create_board: createBoardSelector,
})

export const boardDetailSelector = createStructuredSelector({
  user: selectedUserSelector,
  board: selectedBoardSelector,
  pins: selectedBoardPinsSelector,
})

export const pinDetailSelector = createStructuredSelector({
  user: selectedUserSelector,
  board: selectedBoardSelector,
  pin: selectedPinSelector,
  added_via: addedViaUserSelector,
})

export const uploadPinSelector = createStructuredSelector({
  boards: userBoardsSelector,
  default_board: defaultBoardSlugSelector,
  create_pin: createPinSelector,
})
