// import { createStore, applyMiddleware, compose } from 'redux'
// // import thunk from 'redux-thunk'
// // sagas
// import createSagaMiddleware from 'redux-saga'
// const sagas = createSagaMiddleware()
// import { rootSaga } from './sagas'
//
// import { persistStore, autoRehydrate } from 'redux-persist'
// import rootReducer from './reducers'
//
// // DEV TOOLS
// import createLogger from 'redux-logger'
// const logger = createLogger()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
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
