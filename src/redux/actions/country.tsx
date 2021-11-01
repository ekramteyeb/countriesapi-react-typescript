import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ADD_ALL_COUNTRIES,
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

export function fetchAllCountries(countries: Country[]): CountryActions {
  return {
    type: ADD_ALL_COUNTRIES,
    payload: {
      countries,
    },
  }
}
// Async action processed by redux-thunk middleware
export function fetchCountries(url: string) {
  return (dispatch: Dispatch) => {
    return fetch(url)
      .then((resp) => resp.json())
      .then((countries) => {
        localStorage.setItem('allCountries', JSON.stringify(countries))
        dispatch(fetchAllCountries(countries))
      })
  }
}

/* export function AddCountryMiddle(country: Country) {
  return (dispatch: Dispatch) => {
    let state = SaveState()
    localStorage.setItem('state', JSON.stringify(state))
    return dispatch(addCountry(country))
  }
} */

// Async action processed by redux-thunk middleware
/* export function fetchCountry(countryId: string) {
  return (dispatch: Dispatch) => {
    return fetch(`countries/${countryId}`)
      .then((resp) => resp.json())
      .then((country) => {
        dispatch(addCountry(country))
      })
  }
} */
