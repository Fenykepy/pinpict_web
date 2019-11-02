import { createStructuredSelector } from 'reselect'

export const usernameSelector = state => state.user.username
export const isLoggingInSelector = state => state.user.is_logging_in
export const loginErrorsSelector = state => state.user.login_errors

export const userSelector = createStructuredSelector({
  username: usernameSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
})
