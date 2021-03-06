import { createStructuredSelector } from 'reselect'

import {
  usernameSelector,
  authenticatedSlugSelector,
  isLoggingInSelector,
  isRefreshingSelector,
  loginErrorsSelector,
} from 'user/selectors'



export const appSelector = createStructuredSelector({
  username: usernameSelector,
  authenticatedslug: authenticatedSlugSelector,
  is_logging_in: isLoggingInSelector,
  is_refreshing: isRefreshingSelector,
  login_errors: loginErrorsSelector,
})

