import { combineReducers } from 'redux'

import navigation from 'app/reducers'
import user from 'user/reducers'
import librairy from 'librairy/reducers'

const rootReducer = combineReducers({
  navigation,
  user,
  librairy,
})

export default rootReducer
