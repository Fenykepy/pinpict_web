import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import FormWrapper from 'forms/components/formWrapper/FormWrapper'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import FormRequiredField from 'forms/components/formRequiredField/FormRequiredField'
import Submit from 'forms/components/submit/Submit'


const WEBPAGE_FORM = "WEBPAGE_FORM"


class PinFromWebpage extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value})
  }

  handleScan(e) {
    e.preventDefault()
    this.props.history.push(
      `/pin/find/?url=${encodeURIComponent(this.state.url)}`
    )
  }

  render() {

    //console.log('PinFromWebpage', this.props)
    return (
      <FormWrapper>
        <h1>Find pins on a webpage</h1>
        <form
          id={WEBPAGE_FORM}
          onSubmit={this.handleScan.bind(this)}
        >
        <FieldWrapper>
          <label htmlFor="id-url">Url:<FormRequiredField /></label>
          <input
            id="id-url"
            name="url"
            type="url"
            value={this.state.url}
            onChange={this.handleUrlChange.bind(this)}
            placeholder="http://www.example.com"
            required
          />
        </FieldWrapper>
        </form>
        <footer>
          <FieldWrapper>
            <Submit
              primary={true}
              form={WEBPAGE_FORM}
              value="Find"
            />
          </FieldWrapper>
        </footer>
      </FormWrapper>
    )
  }
}


export default withRouter(PinFromWebpage)
