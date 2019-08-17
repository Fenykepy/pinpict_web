import { combineReducers } from 'redux'

import user from 'user/reducers'
import librairy from 'librairy/reducers'

const rootReducer = combineReducers({
  user,
  librairy,
})

export default rootReducer
