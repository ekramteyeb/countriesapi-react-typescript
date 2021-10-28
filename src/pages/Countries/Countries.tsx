import {useDispatch} from 'react-redux'
import { CountryCard } from '../../components/CountryCard'
import { removeCountry } from '../../redux/actions'
import { Country } from '../../types'

import './index.scss'

type CountriesType = {
  countries: Country[]
}

export default function Countries({ countries }: CountriesType) {
  const dispatch = useDispatch()
  return (
    <div className="cart__Container">
      
      {countries.length > 0 ? (
        countries.map((con: Country) => (
          <CountryCard key={con.name} country={con} handleRemove={() => dispatch(removeCountry(con))} />
        ))
      ) : (
        <h2>There are no contries in cart</h2>
      )}
    </div>
  )
}
