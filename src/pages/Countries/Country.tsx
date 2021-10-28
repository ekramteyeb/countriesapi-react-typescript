import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppState } from '../../types'
//import {Country} from '../types'

export default function Countryi() {
  const { name }  = useParams<{ name:string }>()
  
  console.log(name, 'looking for  country')

 
  const country = useSelector((state: AppState) => state.country.allCountries)
  
 

  /* console.log(country, 'searched country')
  console.log(name, 'looking for  country')
  if (!country) {
    return <div>Country not found</div>
  }
 */
  return (
    <>
      <h1>Country page</h1>
      {console.log(country, 'incart') }

      {/*  <h2>{`${country.name} - $${country.population}`}</h2> */}
    </>
  )
}
