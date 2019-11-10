
import {
  createSelector,
  createStructuredSelector
} from 'reselect'

const boardsSelector = state => state.pinpict.boards
const pinsSelector = state => state.pinpict.pins
const usersSelector = state => state.pinpict.users
const selectedUserslugSelector = state => state.pinpict.selected_user_slug
const selectedBoarduserslugSelector = state => state.pinpict.selected_boarduserslug
const selectedPinidSelector = state => state.pinpict.selected_pin_id

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


export const boardsListSelector = createStructuredSelector({
  user: selectedUserSelector,
  public_boards: publicBoardsSelector,
  private_boards: privateBoardsSelector,
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
})
