import {
  SET_MODAL,
  CLOSE_MODAL,
} from 'modal/actionsTypes'


export default function modal(state = {}, action) {
  switch (action.type) {
      case SET_MODAL:
          return {
            id: action.modal_id,
            extra_props: action.extra_props,
          }
      case CLOSE_MODAL:
          return {}
      default:
          return state
  }
}
