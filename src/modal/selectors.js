import { createStructuredSelector } from 'reselect'

const modalIdSelector = state => state.modal.id
const modalExtraPropsSelector = state => state.modal.extra_props

export const modalSelector = createStructuredSelector({
  modal: modalIdSelector,
  extra_props: modalExtraPropsSelector,
})
