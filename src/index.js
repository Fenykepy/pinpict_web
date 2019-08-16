import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStoreWithMiddleware } from './store'
import rootReducer from './rootReducer'

import 'styles/reset.css'
import 'styles/index.css'
import 'styles/forms.css'

import App from './app/containers/app/App'
import * as serviceWorker from './serviceWorker'

import { refresh } from 'user/actions'

let store = createStoreWithMiddleware(rootReducer)

// try to authenticate here
store.dispatch(refresh())

// Log the initial state
console.log('initial store', store.getState())

// Everytime the state changes, log it
const unsubscribe = store.subscribe(() => console.log('store', store.getState()))


render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
