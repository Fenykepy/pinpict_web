import React, { Component } from 'react'

import Boards from 'pinpict/containers/boards/Boards'
import BoardDetail from 'pinpict/containers/boardDetail/BoardDetail'

import { Switch, Route } from 'react-router-dom'

export default class Pinpict extends Component {
  
  render() {
    console.log('Pinpict', this.props)
    
    return (
      <Switch>
        <Route path="/:selected_user_slug/:selected_board_slug/">
          <BoardDetail />
        </Route>
        <Route path="/:selected_user_slug/">
          <Boards />
        </Route>
      </Switch>
    )
  }

}

