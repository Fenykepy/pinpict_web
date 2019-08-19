import { createStructuredSelector } from 'reselect'

export const usermailSelector = state => state.user.usermail
export const isLoggingInSelector = state => state.user.is_logging_in
export const loginErrorsSelector = state => state.user.login_errors

export const userSelector = createStructuredSelector({
  usermail: usermailSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
})
