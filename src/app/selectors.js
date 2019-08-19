import { createStructuredSelector } from 'reselect'

import {
  usermailSelector,
  isLoggingInSelector,
  loginErrorsSelector,
} from 'user/selectors'


const navigationSelector = state => state.navigation

export const appSelector = createStructuredSelector({
  usermail: usermailSelector,
  is_logging_in: isLoggingInSelector,
  login_errors: loginErrorsSelector,
  navigation: navigationSelector, 
})

