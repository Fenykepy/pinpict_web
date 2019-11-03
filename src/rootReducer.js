import { combineReducers } from 'redux'

import user from 'user/reducers'
import pinpict from 'pinpict/reducers'

const rootReducer = combineReducers({
  user,
  pinpict,
})

export default rootReducer



/* fake store */

/*

pins = {
  id: {
    id: int,
    fetched: bool,
    is_fetching: bool,
    sha1: string,
    source_file: string,
    source_file_url: string,
    source_domain: string,
    source: string,
    date_created: datetime,
    description: string,
    added_via: <username>,
    owner_rate: int,
    n_likes: int,
  }
}

scan = {
  url: string,
  full_search: bool,
  is_scanning: bool,
  results: [
    {src: string, description: string},
  ]
}

tags = ["name", "name"]

boards = {
  slug@userslug: {
    slug: string,
    short_fetched: bool,
    is_fetching_short: bool,
    full_fetched: bool,
    is_fetching_full: bool,

    // short data
    title: string,
    slug: string,
    n_pins: int,
    cover1: string,
    cover2: string,
    cover3: string,
    cover4: string,
    cover5: string,

    // public data
    description: string,
    pin_default_description: string,
    pins_order: string,
    reverse_pins_order: bool,
    users_can_read: [],
    followers: [],
    n_followers: int,
    pins: []

    // full data 
  }
}


*/
