import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Country, AppState } from '../types'
import { addCountry, removeCountry } from '../redux/actions'


export default function Home() {
  const dispatch = useDispatch()
  const countries = useSelector((state: AppState) => state.country.inCart)

  const handleAddCountry = () => {
    const country: Country = {
      //id:((+new Date()).toString()),
      id:Math.random() * 139303,
      flag:'https://daki.live',
      name:'afganistan',
      languages:[{name:'amharic'}],
      population: 200000,
      region:'Africa',
      nativeName:'habesha'

      /* id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      price: +(Math.random() * 10).toFixed(2), */
    }
    dispatch(addCountry(country))
  }

  return (
    <>
      <h1>Home page working assignment this : redux feature</h1>
      {countries.length <= 0 ? (
        <div>No countries in cart</div>
      ) : (
        <p>{`${countries.length} items in cart`}</p>
      )}
      <ul>
        {countries.map((p) => (
          <li key={p.id}>
            <Link to={`/countries/${p.id}`}>{`${p.name} - $${p.population}`}</Link>

            {'  '}

            <button onClick={() => dispatch(removeCountry(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddCountry}>Add Country</button>
    </>
  )
}
