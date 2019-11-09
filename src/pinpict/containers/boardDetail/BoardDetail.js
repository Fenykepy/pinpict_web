import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  selectUser,
  fetchUserIfNeeded,
} from 'pinpict/actions'




class BoardDetail extends Component {
  
  fetchDatas(userslug, boardslug) {
    this.props.dispatch(selectUser(userslug))
    this.props.dispatch(fetchUserIfNeeded(userslug))
  }

  componentDidMount() {
    this.fetchDatas(
      this.props.match.params.userslug,
      this.props.match.params.boardslug
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userslug !== prevProps.match.params.userslug ||
        this.props.match.params.boardslug !== prevProps.match.params.boardslug) {
          this.fetchDatas(
            this.props.match.params.userslug,
            this.props.match.params.boardslug
          )
    }
  }

  render() {
    console.log('BoardDetail', this.props)

    return (
      <div>
        Board detail !
      </div>
    )
  }
}

export default withRouter(BoardDetail)
