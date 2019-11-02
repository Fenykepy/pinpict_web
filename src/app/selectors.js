import { createStructuredSelector } from 'reselect'

import {
  usernameSelector,
  isLoggingInSelector,
  loginErrorsSelector,
} from 'user/selectors'


const navigationSelector = state => state.navigation

export const appSelector = createStructuredSelector({
  username: usernameSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
  navigation: navigationSelector, 
})

