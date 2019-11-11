import {
  SET_MODAL,
  CLOSE_MODAL,
} from 'modal/actionsTypes'


export default function modal(state = '', action) {
  switch (action.type) {
      case SET_MODAL:
          return action.modal_id
      case CLOSE_MODAL:
          return ''
      default:
          return state
  }
}
