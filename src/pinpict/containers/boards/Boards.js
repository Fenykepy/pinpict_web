import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { boardsListSelector } from 'pinpict/selectors'

import {
  selectUser,
  fetchUserIfNeeded,
  fetchUserPublicBoardsIfNeeded,
  fetchUserPrivateBoardsIfNeeded,

} from 'pinpict/actions'

class Boards extends Component {

  fetchDatas(userslug) {
    this.props.dispatch(selectUser(userslug))
    this.props.dispatch(fetchUserIfNeeded(userslug))
    this.props.dispatch(fetchUserPublicBoardsIfNeeded(userslug))
    this.props.dispatch(fetchUserPrivateBoardsIfNeeded(userslug))
  }


  componentDidMount() {
    // we fetch given user and his boards
    this.fetchDatas(this.props.match.params.userslug)
  }

  componentWillReceiveProps(nextProps) {
    // we fetch given user and his boards if params changed
    if (this.props.match.params.userslug !== nextProps.match.params.userslug) {
      this.fetchDatas(this.props.match.params.userslug)
    }
  }

  render() {
    console.log('Boards', this.props)

    return (
      <p>Userslug is { this.props.match.params.userslug }</p>
    )
    
  }
}

Boards.propTypes = {
  userslug: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
}


export default withRouter(connect(boardsListSelector)(Boards))

