
import {
  createSelector,
  createStructuredSelector
} from 'reselect'

const boardsSelector = state => state.pinpict.boards
const usersSelector = state => state.pinpict.users
const selectedUserslugSelector = state => state.pinpict.selected_user_slug

const selectedUserSelector = createSelector(
  usersSelector, selectedUserslugSelector,
  (users, userslug) => {
    if (userslug) {
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

export const boardsListSelector = createStructuredSelector({
  selected_user: selectedUserSelector,
  public_boards: publicBoardsSelector,
  private_boards: privateBoardsSelector,
})
