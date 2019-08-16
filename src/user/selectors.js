import { createStructuredSelector } from 'reselect'

const usermailSelector = state => state.user.usermail
const isLoggingInSelector = state => state.user.is_logging_in
const loginErrorsSelector = state => state.user.login_errors

export const userSelector = createStructuredSelector({
  usermail: usermailSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
})
