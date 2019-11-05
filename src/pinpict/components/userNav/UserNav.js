import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import styles from './userNav.module.css'

export default class UserNav extends Component {

  render() {
    return (
      <nav
        className={styles.userNav}
      >
        <ul>
          <li>
            <NavLink
              to={`/${this.props.userslug}/`}
              exact={true}
              activeClassName={styles.active}
            >
                <span
                  className={styles.number}
                >{this.props.n_public_boards}</span>
                <br />
                <span
                  className={styles.title}
                >{this.props.n_public_boards === 1 ? "Board" : "Boards"}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${this.props.userslug}/pins/`}
              exact={true}
              activeClassName={styles.active}
            >
                <span
                  className={styles.number}
                >{this.props.n_public_pins}</span>
                <br />
                <span
                  className={styles.title}
                >{this.props.n_public_pins === 1 ? "Pin" : "Pins"}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${this.props.userslug}/followers/`}
              exact={true}
              activeClassName={styles.active}
            >
                <span
                  className={styles.number}
                >{this.props.n_followers}</span>
                <br />
                <span
                  className={styles.title}
                >{this.props.n_followers === 1 ? "Follower" : "Followers"}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${this.props.userslug}/following/`}
              exact={true}
              activeClassName={styles.active}
            >
                <span
                  className={styles.number}
                >{this.props.n_following}</span>
                <br />
                <span
                  className={styles.title}
                >Following</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}


UserNav.propTypes = {
  userslug: PropTypes.string.isRequired,
  n_public_boards: PropTypes.number.isRequired,
  n_public_pins: PropTypes.number.isRequired,
  n_followers: PropTypes.number.isRequired,
  n_following: PropTypes.number.isRequired,
}


