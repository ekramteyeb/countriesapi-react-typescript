import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

// access state in localstorage
//for cart items
let localCart: string | any = localStorage.getItem('inCartState')
let inCartState = JSON.parse(localCart)
// for all countries
let allCountriesLocalString : string | any = localStorage.getItem('allCountries')
let allCountriesLocal = JSON.parse(allCountriesLocalString)

const initialState: AppState = {
  country: {
    inCart: inCartState ? inCartState : [],
    allCountries: allCountriesLocal ? allCountriesLocal :  [],
  },
}

export default function makeStore(state = initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    state,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
