import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryActions,
  Country,
} from '../../types'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountry(countryId: string) {
  return (dispatch: Dispatch) => {
    return fetch(`countries/${countryId}`)
      .then((resp) => resp.json())
      .then((country) => {
        dispatch(addCountry(country))
      })
  }
}
