import React, { Component } from 'react'
import PropTypes from 'prop-types'


import UserMenuButton from 'user/components/userMenuButton/UserMenuButton'

import styles from './header.module.css'

import {
  ALBUMS_MODULE,
  PICTURES_MODULE,
} from 'app/actionsTypes'

import { setModule } from 'app/actions'

export default class Header extends Component {

  selectPictures(e) {
    e.preventDefault()
    this.props.dispatch(setModule(PICTURES_MODULE))
  }
 
  selectAlbums(e) {
    e.preventDefault()
    this.props.dispatch(setModule(ALBUMS_MODULE))
  }

  render() {
        
    return (
      <header
        role="banner"
        className={styles.header}
      >
        <h1
          className={styles.title}
        >PhotoBook</h1>

        <nav
          className={styles.navLinks}
        >
          <a 
            href="/"
            className={this.props.module === PICTURES_MODULE ? styles.selected : ""}
            onClick={this.selectPictures.bind(this)}
          >Pictures</a>
          <a 
            href="/"
            className={this.props.module === ALBUMS_MODULE ? styles.selected : ""}
            onClick={this.selectAlbums.bind(this)}
          >Albums</a>
        </nav>
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
  dispatch: PropTypes.func.isRequired,
  usermail: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
}
