import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class UserDetail extends Component {
  
  getEditButton() {
    if (this.props.selected_user.slug === this.props.userslug) {
      // TOTO return edit button
      return null
    }
    return null
  }

  getUserWebsite() {
    if (this.props.selected_user.website) {
      return (
        <div
          className=""
        >
            <a
              href={this.props.selected_user.website}
              target="_blank"
            >{this.props.selected_user.website}</a>
        </div>
      )
    }
    return null
  }

  getUserSocials() {
    return null
  }

  render() {
    return(
      <article
        className=""
      >
          <img
            src={this.props.selected_user.avatar}
            alt={`${this.props.selected_user.username}'s avatar`}
          />
          <h1>{this.props.selected_user.username}</h1>
          <hr />
          {this.getEditButton()}
          {this.getUserWebsite()}
          {this.getUserSocials()}
          
      </article>
    )
  }
}

