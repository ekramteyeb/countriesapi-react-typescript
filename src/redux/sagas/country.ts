import { takeLatest } from 'redux-saga/effects'

import { ADD_COUNTRY, AddCountryAction } from '../../types'

function* doSomethingWhenAddingCountry(action: AddCountryAction) {
  yield console.log(action)
}
const takeLatestArray = [takeLatest(ADD_COUNTRY, doSomethingWhenAddingCountry)]
export default  takeLatestArray
