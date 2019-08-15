import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserMenuButton from 'user/components/userMenuButton/UserMenuButton'

import styles from './header.module.css'

export default class Header extends Component {
    
  render() {
        
    return (
      <header
        role="banner"
        className={styles.header}
      >
        <h1
          className={styles.title}
        >PhotoBook</h1>

        <ul
          className={styles.headerLinks}
        >
          <li><UserMenuButton
            usermail={this.props.usermail}
          /></li>
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  usermail: PropTypes.string.isRequired,
}
