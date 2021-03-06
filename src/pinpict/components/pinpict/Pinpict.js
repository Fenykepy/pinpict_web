import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import withAuthentication from 'user/HOC/withAuthentication'

import Boards from 'pinpict/containers/boards/Boards'
import BoardDetail from 'pinpict/containers/boardDetail/BoardDetail'
import PinDetail from 'pinpict/containers/pinDetail/PinDetail'
import PinFrom from 'pinpict/components/pinFrom/PinFrom'
import FindPins from 'pinpict/containers/findPins/FindPins'
import PinFromComputer from 'pinpict/containers/pinFromComputer/PinFromComputer'
import PinFromWebpage from 'pinpict/components/pinFromWebpage/PinFromWebpage'

const AuthenticatedPinFromWebpage = withAuthentication(PinFromWebpage)
const AuthenticatedPinFromComputer = withAuthentication(PinFromComputer)
const AuthenticatedPinFrom = withAuthentication(PinFrom)
const AuthenticatedFindPins = withAuthentication(FindPins)

export default class Pinpict extends Component {
  
  render() {
    console.log('Pinpict', this.props)
    
    return (
      <Switch>
        <Route path="/pin/from/webpage/">
          <AuthenticatedPinFromWebpage />
        </Route>
        <Route path="/pin/from/yourcomputer/">
          <AuthenticatedPinFromComputer />
        </Route>
        <Route path="/pin/from/">
          <AuthenticatedPinFrom />
        </Route>
        <Route path="/pin/find/">
          <AuthenticatedFindPins />
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

