import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './userSocialsLinks.module.css'

export default class UserSocialsLinks extends Component {

  render() {
    let socials = []

    if (this.props.user.facebook_link) {
      socials.push({class: styles.fb, link: this.props.user.facebook_link,
      alt: "facebook link", title: "Follow on facebook"})
    }
    if (this.props.user.flickr_link) {
      socials.push({class: styles.flickr, link: this.props.user.flickr_link,
      alt: "flickr link", title: "Follow on flickr"})
    }
    if (this.props.user.px500_link) {
      socials.push({class: styles.px500, link: this.props.user.px500_link,
      alt: "500px link", title: "Follow on 500px"})
    }
    if (this.props.user.twitter_link) {
      socials.push({class: styles.twitter, link: this.props.user.twitter_link,
      alt: "twitter link", title: "Follow on twitter"})
    }
    if (this.props.user.gplus_link) {
      socials.push({class: styles.gplus, link: this.props.user.gplus_link,
      alt: "google plus link", title: "Follow on google +"})
    }
    if (this.props.user.pinterest_link) {
      socials.push({class: styles.pinterest, link: this.props.user.pinterest_link,
      alt: "pinterest link", title: "Follow on pinterest"})
    }
    if (this.props.user.vk_link) {
      socials.push({class: styles.vk, link: this.props.user.vk_link,
      alt: "vkontakte link", title: "Follow on vkontakte"})
    }
    if (this.props.user.instagram_link) {
      socials.push({class: styles.insta, link: this.props.user.instagram_link,
      alt: "instagram link", title: "Follow on instagram"})
    }
    
    // we return null if no socials links
    if (socials.length === 0) return null

    return (
      <ul
        className={styles.social_icons}
      >
          {socials.map(social => 
            (<li
                key={social.class}
              ><a
               title={social.title}
               href={social.link}
               className={social.class}
               target="_blank"
               rel="noopener noreferrer"
             ><span
                className="accessibility_text"
               >{social.alt} link</span></a></li>
            )
          )}
      </ul>
    )
  }
}

UserSocialsLinks.propTypes = {
  user: PropTypes.object.isRequired,
}
