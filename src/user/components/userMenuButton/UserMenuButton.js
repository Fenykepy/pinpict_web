import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './userMenuButton.module.css'

export default class UserMenuButton extends Component {
    
  constructor(props) {
    super(props)

    this.state = {
      menu: false
    }
  }


  toogleMenu(e) {
    e.preventDefault()
    this.setState({menu: ! this.state.menu})
  }

  closeMenu() {
    this.setState({menu: false})
  }

  getMenu() {
    if (this.state.menu) {
      return (
        <div
          close={this.closeMenu.bind(this)}
        />
      )
    }
    return null
  }

  render() {

    return (
      <div
        className={styles.wrapper}
      >
        <button
          className={styles.userMenu}
          onClick={this.toogleMenu.bind(this)}
        ><div>{this.props.username}</div>
        </button>
        {this.getMenu()}
      </div>
    )
  }
}

UserMenuButton.propTypes = {
  username: PropTypes.string.isRequired,
}
