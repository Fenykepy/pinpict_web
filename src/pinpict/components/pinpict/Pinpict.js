import React, { Component } from 'react'

import Boards from 'pinpict/containers/boards/Boards'
import BoardDetail from 'pinpict/containers/boardDetail/BoardDetail'
import PinDetail from 'pinpict/containers/pinDetail/PinDetail'
import PinFrom from 'pinpict/components/pinFrom/PinFrom'

import { Switch, Route } from 'react-router-dom'

export default class Pinpict extends Component {
  
  render() {
    console.log('Pinpict', this.props)
    
    return (
      <Switch>
        <Route path="/pin/from/">
          <PinFrom />
        </Route>
        <Route path="/pin/:pin_id/">
          <PinDetail />
        </Route>
        <Route path="/:userslug/:boardslug/">
          <BoardDetail />
        </Route>
        <Route path="/:userslug/">
          <Boards />
        </Route>
      </Switch>
    )
  }

}

