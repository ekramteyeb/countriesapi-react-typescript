import React from 'react'
//import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Country() {
  //const { id } = useParams()

  const country = useSelector((state: AppState) =>
    state.country.inCart.find((p) => p.id === 8 /* 'id' */)
  )

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <>
      <h1>Country page</h1>
      <h2>{`${country.name} - $${country.population}`}</h2>
    </>
  )
}
