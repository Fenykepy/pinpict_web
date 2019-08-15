import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStoreWithMiddleware } from './store'
import rootReducer from './rootReducer'

import 'styles/reset.css'
import 'styles/index.css'

import App from './app/containers/app/App'
import * as serviceWorker from './serviceWorker'

let store = createStoreWithMiddleware(rootReducer)

// try to authenticate here

// Log the initial state
console.log(store.getState())

// Everytime the state changes, log it
store.subscribe(() => console.log(store.getState()))


render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
