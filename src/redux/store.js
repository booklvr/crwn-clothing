import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'

const middleware = [thunk]

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

export const persistor = persistStore(store)
