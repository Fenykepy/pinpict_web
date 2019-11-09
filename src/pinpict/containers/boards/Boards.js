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

import Spinner from 'app/components/spinner/Spinner'
import UserDetail from 'pinpict/components/userDetail/UserDetail'
import BoardsList from 'pinpict/components/boardsList/BoardsList'
import PrivateBoardsWrapper from 'pinpict/components/privateBoardsWrapper/PrivateBoardsWrapper'


class Boards extends Component {

  fetchDatas(selected_user_slug) {
    this.props.dispatch(selectUser(selected_user_slug))
    this.props.dispatch(fetchUserIfNeeded(selected_user_slug))
    this.props.dispatch(fetchUserPublicBoardsIfNeeded(selected_user_slug))
    this.props.dispatch(fetchUserPrivateBoardsIfNeeded(selected_user_slug))
  }


  componentDidMount() {
    // we fetch given user and his boards
    this.fetchDatas(this.props.match.params.selected_user_slug)
  }

  componentDidUpdate(prevProps) {
    // we fetch given user and his boards if params changed
    if (this.props.match.params.selected_user_slug !== prevProps.match.params.selected_user_slug) {
      this.fetchDatas(this.props.match.params.selected_user_slug)
    }
  }

  render() {
    console.log('Boards', this.props)

    if (! this.props.selected_user.slug || this.props.selected_user.is_fetching ||
        ! this.props.public_boards ) {
          return (
            <Spinner
              message="Fetching..."
            />
          )
    }

    return (
      <div>
        <UserDetail
          selected_user={this.props.selected_user}
        />
        <section
            className={styles.boardsSection}
        >
          <BoardsList
            boards={this.props.public_boards}
            match={this.props.match}
          />
        </section>
        <PrivateBoardsWrapper
            private_boards={this.props.private_boards}
            match={this.props.match}
        />
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
}


export default withRouter(connect(boardsListSelector)(Boards))

