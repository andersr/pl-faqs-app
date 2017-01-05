import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import FaqsContainer from './containers/FaqsContainer'
import constants from './lib/constants'
const staticContent = require('./lib/staticContent')

render(
  <Provider store={store}>
    <FaqsContainer faqsApi={constants.faqsApi} headingText={staticContent.faqsHeader} />
  </Provider>,
  document.getElementById('root')
)
