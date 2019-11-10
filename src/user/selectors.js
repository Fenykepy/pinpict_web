import { createStructuredSelector } from 'reselect'

export const usernameSelector = state => state.user.username
export const authenticatedSlugSelector = state => state.user.authenticatedslug
export const isLoggingInSelector = state => state.user.is_logging_in
export const isRefreshingSelector = state => state.user.is_refreshing
export const loginErrorsSelector = state => state.user.login_errors

export const userSelector = createStructuredSelector({
  username: usernameSelector,
  authenticatedslug: authenticatedSlugSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
})
