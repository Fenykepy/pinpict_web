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

import styles from './boards.module.css'

import UserDetail from 'pinpict/components/userDetail/UserDetail'
import BoardsList from 'pinpict/components/boardsList/BoardsList'


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
        />
        <section>
          <BoardsList
            boards={this.props.public_boards}
            match={this.props.match}
          />
        </section>
        <section
          className={styles.private_boards}
        >
          <h2>Private boards</h2>
          <BoardsList
            boards={this.props.private_boards}
            match={this.props.match}
          />
        </section>

      </div>
    )
    
  }
}

Boards.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  selected_user: PropTypes.object.isRequired,
  public_boards: PropTypes.array.isRequired,
  private_boards: PropTypes.array.isRequired,
  userslug: PropTypes.string,
}


export default withRouter(connect(boardsListSelector)(Boards))

