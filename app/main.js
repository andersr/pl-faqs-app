import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'

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
  <Provider store={store}>
    <FaqsContainer faqsApi={constants.faqsApi} headingText={staticContent.faqsHeader} />
  </Provider>,
  document.getElementById('root')
)



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
