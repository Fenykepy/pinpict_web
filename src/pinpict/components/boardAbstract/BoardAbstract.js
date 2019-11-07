import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './boardAbstract.module.css'

import settings from 'pinpict_config'

import { getPicturePath } from 'helpers/utils'

const BASE_URL = settings.base_url

export default class BoardAbstract extends Component {
  
  render() {
    console.log('BoardAbstract', this.props)

    return (
      <article
        className={styles.board}
      >
        <Link
          href="/"
          title={'More from ' + this.props.title}
        >
          <header><h1>{this.props.title}</h1></header>
          <div
            className={styles.imgWrapper}
          >
            <img
              src={BASE_URL + 'media/previews/216-160/' + 
                getPicturePath(this.props.cover1 || "")}
              alt={this.props.title}
            />
          </div>
          <ul>
            <li><img
              src={BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover2 || "")}
              alt={this.props.title}
            /></li>
            <li><img
              src={BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover3 || "")}
              alt={this.props.title}
            /></li>
            <li><img
              src={BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover4 || "")}
              alt={this.props.title}
            /></li>
            <li><img
              src={BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover5 || "")}
              alt={this.props.title}
            /></li>
          </ul>
        </Link>
        <button>Edit</button>
      </article> 
    )
  }
}

BoardAbstract.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover1: PropTypes.string,
  cover2: PropTypes.string,
  cover3: PropTypes.string,
  cover4: PropTypes.string,
  cover5: PropTypes.string,
  n_pins: PropTypes.number,
}
