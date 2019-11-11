import * as types from './actionsTypes'

export function setModal(modal_id) {
  return {
    type: types.SET_MODAL,
    modal_id,
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL,
  }
}
