import { createStructuredSelector } from 'reselect'

const modalIdSelector = state => state.modal

export const modalSelector = createStructuredSelector({
  modal: modalIdSelector,
})
