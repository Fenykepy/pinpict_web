import React, { Component } from 'react'


export const AppContext = React.createContext({
  authenticated_slug: '',
})


export default class AppContextProvider extends Component {

  render() {
    return (
      <AppContext.Provider
        value={this.props.value}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


