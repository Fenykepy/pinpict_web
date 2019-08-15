import React, { Component } from 'react'
import Header from 'app/components/header/Header'
import Login from 'user/components/login/Login'

import styles from './app.module.css'

class App extends Component {


    // if user is authenticated, we show main page
    // else we show login form


    render() {
      return (
         <Login
          is_logging_in={false}
         />
      )

      return (
        <section
            role="main"
            className={styles.main}
        >
            <Header usermail="fred@lavilotte-rolle.fr" />
            <p>Bienvenue sur PhotoBook !</p>
        </section>
      )
    }
}

export default App
