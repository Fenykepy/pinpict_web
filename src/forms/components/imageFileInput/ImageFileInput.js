import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './imageFileInput.module.css'

import RoundCross from 'forms/components/roundCross/RoundCross'

import { formatFileSize } from 'helpers/utils'

export default class ImageFileInput extends Component {


  constructor(props) {
    super(props)
    
    this.state = {
      src: null
    }
  }

  handleClick(e) {
    /*
     * Emulate click on file input,
     * must open browser file selection window
     */
    e.preventDefault()
    let input = document.getElementById(this.props.id)
    input.click()
  }

  handleAddFile(file) {
    this.props.handleFileChange(file)
    let reader = new FileReader()
    reader.onload = (e) => {
      this.setState({src: reader.result})
    }
    reader.readAsDataURL(file)
  }

  handleRemoveFile() {
    this.props.handleFileChange(null)
      this.setState({src: null})
  }

  handleInputChange(e) {
    this.handleAddFile(
      e.target.files[0]
    )
  }

  getChild() {
    if (this.state.src) {
      // we show file image
      return (
        <div
          className={styles.imageWrapper}
        >
          <button
            title={this.props.removeTitle || ""}
            onClick={this.handleRemoveFile.bind(this)}
            className={styles.removeFile}
          >×</button>
          <img
            title={`Filename: ${this.props.file.name}\n weight: ${formatFileSize(this.props.file)}`}
            src={this.state.src}
            alt="To be uploaded"
          />
        </div>
      )
      }

      // we show button
      return (
        <button
          className={styles.addFile}
          title={this.props.title || ""}
          onClick={this.handleClick.bind(this)}
        ><RoundCross
            title={this.props.message}
          /></button>
      )
    }

  render() {
  
    return (
      <div
        className={this.props.className || ""}
      >
        {this.getChild()}
        <input
          id={this.props.id}
          type="file"
          accept={this.props.accept || "image/*"}
          style={{display: "none"}}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>
    )
  }
}


ImageFileInput.propTypes = {
  id: PropTypes.string.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  accept: PropTypes.string,
  title: PropTypes.string,
  removeTitle: PropTypes.string,
}


