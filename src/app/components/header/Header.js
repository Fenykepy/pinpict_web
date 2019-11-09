import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'

import UserMenuButton from 'user/components/userMenuButton/UserMenuButton'

import styles from './header.module.css'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

export default class Header extends Component {

  static contextType = AppContext

  getHeaderLinks() {
    if (this.context.authenticated_slug) {
      // user is authenticated
      return (
        <ul
          className={styles.headerLinks}
        >
          <li><UserMenuButton
            username={this.props.username}
          /></li>
        </ul>
      )
    }

    // show login Link
    return (
        <ul
          className={styles.headerLinks}
        >
          <li><NavLink
            to="/login/"
            activeClassName={styles.active}
          >Login</NavLink></li>
          <li><NavLink
            to="/signup/"
            activeClassName={styles.active}
          >Sign up</NavLink></li>
      </ul>
    )
  }


  render() {
        
    return (
      <header
        role="banner"
        className={styles.header}
      >
        <Link to="/"><h1
          className={styles.title}
        >PinPict</h1></Link>

        {this.getHeaderLinks()}
      </header>
    )
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  username: PropTypes.string,
}
