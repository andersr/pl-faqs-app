import "babel-polyfill"

import * as React from 'react'
import { render } from 'react-dom'
const { AppContainer } = require('react-hot-loader')

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

import rootReducer from './state/reducers'
import { watchForloadFaqs } from './state/sagas/faqs'

import FaqsContainer from './containers/FaqsContainer'
import constants from './lib/constants'
const staticContent = require('./lib/staticContent')

// DEV TOOLS
import createLogger from 'redux-logger'
const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { persistStore, autoRehydrate } from 'redux-persist'

const store = createStore(
  rootReducer,
   composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
  ),
   autoRehydrate()
)
sagaMiddleware.run(watchForloadFaqs)
persistStore(store)

render(
  <AppContainer>
  <Provider store={store}>
    <FaqsContainer faqsApi={constants.faqsApi} headingText={staticContent.faqsHeader} />
  </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/FaqsContainer', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/FaqsContainer').default;

    // And render it into the root element again
    render(
      <AppContainer>
      <Provider store={store}>
        <NextApp faqsApi={constants.faqsApi} headingText={staticContent.faqsHeader} />
      </Provider>
      </AppContainer>,
        document.getElementById('root')
    );
  })
}

// import { persistStore, autoRehydrate } from 'redux-persist'


// DEV TOOLS
// import createLogger from 'redux-logger'
// const logger = createLogger()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(sagas, logger)
//   ),
//   autoRehydrate()
// )
// sagas.run(rootSaga)
//
// persistStore(store)
//
// export default store

//
// import store from './state/store'
