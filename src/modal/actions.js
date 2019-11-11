import * as types from './actionsTypes'

export function setModal(modal_id, extra_props={}) {
  return {
    type: types.SET_MODAL,
    modal_id,
    extra_props,
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL,
  }
}
