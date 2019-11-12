import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import styles from './pinFrom.module.css'

export default class PinFrom extends Component {
  
  render() {
    return (
      <article
        className={styles.pinFrom}
      >
        <header>
          <h1>Add a pin from</h1>
        </header>
        <div>
          <Link
            to="/pin/from/webpage/"
          >A web page</Link>
          <Link
            to="/pin/from/yourcomputer/"
          >Your computer</Link>
        </div>
      </article>
    )
  }
}
