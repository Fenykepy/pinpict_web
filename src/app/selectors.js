import { createStructuredSelector } from 'reselect'

import {
  usernameSelector,
  userslugSelector,
  isLoggingInSelector,
  loginErrorsSelector,
} from 'user/selectors'


const navigationSelector = state => state.navigation

export const appSelector = createStructuredSelector({
  username: usernameSelector,
  userslug: userslugSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
  navigation: navigationSelector, 
})

