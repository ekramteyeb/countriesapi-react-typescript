// Action types
export const ADD_COUNTRY =  'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

type Languages = {
  name: string
}
// A country
export type Country = {
  flag: string;
  name: string;
  languages: Languages[];
  population: number;
  region: string;
  nativeName: string;
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

// Use this union in reducer
export type CountryActions = AddCountryAction | RemoveCountryAction

export type CountryState = {
  inCart: Country[]
}

export type AppState = {
  country: CountryState
}
