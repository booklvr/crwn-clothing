import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'

// SAGAS
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
})
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistStore }
