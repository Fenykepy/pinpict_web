import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './userWebsite.module.css'


export default class UserWebsite extends Component {

  render() {
    if (this.props.website) {
      return (
        <div
          className={styles.website}
        >
            <a
              href={this.props.website}
              target="_blank"
              rel="noopener noreferrer"
            >{this.props.website}</a>
        </div>
      )
    }
    return null
  }
}

UserWebsite.propTypes = {
  website: PropTypes.string,
}
