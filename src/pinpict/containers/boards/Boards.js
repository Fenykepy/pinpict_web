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

import UserDetail from 'pinpict/components/userDetail/UserDetail'


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

  componentDidUpdate(prevProps) {
    // we fetch given user and his boards if params changed
    if (this.props.match.params.userslug !== prevProps.match.params.userslug) {
      this.fetchDatas(this.props.match.params.userslug)
    }
  }

  render() {
    console.log('Boards', this.props)

    return (
      <div>
        <UserDetail
          userslug={this.props.userslug}
          selected_user={this.props.selected_user}
          dispatch={this.props.dispatch}
        />
      </div>
    )
    
  }
}

Boards.propTypes = {
  userslug: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  selected_user: PropTypes.object.isRequired,
  public_boards: PropTypes.array.isRequired,
  private_boards: PropTypes.array.isRequired,
}


export default withRouter(connect(boardsListSelector)(Boards))

