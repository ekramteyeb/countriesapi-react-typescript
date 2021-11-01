import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CountryCardSingle } from '../../components/CountryCardSingle'
import { AppState } from '../../types'

export default function Country() {
  const { name } = useParams<{ name: string }>()
  const countriesInCart = useSelector((state: AppState) => state.country.inCart)
  const country: any =
    countriesInCart.length > 0
      ? countriesInCart.find((con) => con.name === name)
      : ''
  return (
    <>
      <CountryCardSingle
        country={country}
        handleRemove={() => alert('')}
      />
    </>
  )
}
