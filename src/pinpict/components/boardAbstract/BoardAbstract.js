import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './boardAbstract.module.css'

import settings from 'pinpict_config'

import { getPicturePath } from 'helpers/utils'

import grey58 from './grey58.png'

import Button from 'forms/components/button/Button'

const BASE_URL = settings.base_url


export default class BoardAbstract extends Component {
  
  render() {
    //console.log('BoardAbstract', this.props)

    return (
      <article
        className={styles.board}
      >
        <Link
          to={this.props.match.url + this.props.slug + "/"}
          title={'More from ' + this.props.title}
        >
          <header><h1>{this.props.title}</h1></header>
          <div
            className={styles.imgWrapper}
          >
            <img
              src={this.props.cover1 ? BASE_URL + 'media/previews/216-160/' + 
                getPicturePath(this.props.cover1) : grey58}
              alt={this.props.title}
            />
          </div>
          <ul>
            <li><img
              src={this.props.cover2 ? BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover2) : grey58}
              alt={this.props.title}
            /></li>
            <li><img
              src={this.props.cover3 ? BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover3) : grey58}
              alt={this.props.title}
            /></li>
            <li><img
              src={this.props.cover4 ? BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover4) : grey58}
              alt={this.props.title}
            /></li>
            <li><img
              src={this.props.cover5 ? BASE_URL + 'media/previews/50-50/' + 
                getPicturePath(this.props.cover5) : grey58}
              alt={this.props.title}
            /></li>
          </ul>
          <div
            className={styles.label + " " + styles.n_pins}
          >{this.props.n_pins}{this.props.n_pins === 1 ? " Pin" : " Pins"}</div>
          {/* TODO edit cover button */}
        </Link>
        {/* TODO edit button if owner, follow / unfollow button if authenticated, view button else */}
        <Button
          title="Edit board"
          primary={true}
        >Edit</Button>
      </article> 
    )
  }
}

BoardAbstract.propTypes = {
  slug: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cover1: PropTypes.string,
  cover2: PropTypes.string,
  cover3: PropTypes.string,
  cover4: PropTypes.string,
  cover5: PropTypes.string,
  n_pins: PropTypes.number,
}
