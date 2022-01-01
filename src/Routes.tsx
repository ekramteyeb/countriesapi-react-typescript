import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Country from './pages/Countries/Country'
import Countries from './pages/Countries/Countries'
import { AppState } from './types'

const Routes = () => {
  const incarts = useSelector((state: AppState) => state.country.inCart)
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/countries/:name">
        <Country />
      </Route>
      <Route path="/countries">
        <Countries countries={incarts} />
      </Route>
    </Switch>
  )
}

export default Routes
