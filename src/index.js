import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { makeStore } from 'store'
import AppContainer from 'containers/AppContainer'
import './theme/index.scss'

const store = makeStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
