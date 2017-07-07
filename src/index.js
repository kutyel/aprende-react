import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import './styles/style.css'

import store, { history } from './store'

import App from './components/App'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
