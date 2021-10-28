// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const ADD_ALL_COUNTRIES = 'ADD_ALL_COUNTRIES'

type Languages = {
  name: string
}
// A country
export type Country = {
  id: number
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
  nativeName: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}
export type AddAllCountriesAction = {
  type: typeof ADD_ALL_COUNTRIES
  payload: {
    countries: Country[]
  }
}

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | AddAllCountriesAction

export type CountryState = {
  inCart: Country[]
  allCountries: Country[]
}

export type AppState = {
  country: CountryState
}
