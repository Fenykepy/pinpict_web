import React, { Component } from 'react'
import Header from 'app/components/header/Header'

import styles from './app.module.css'

class App extends Component {

    render() {
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
