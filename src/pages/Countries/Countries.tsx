import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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
      <div className="cart_Top">
        <Button variant="info">
          <Link to="/">Home</Link>
        </Button>
        {countries.length > 0 ? <h3>{countries.length } Selected Countries </h3> : ''}
      </div>
      <div className="cart__Countries">
        {countries.length > 0 ? (
          countries.map((con: Country) => (
            <CountryCard
              key={con.name}
              country={con}
              handleRemove={() => dispatch(removeCountry(con))}
            />
          ))
        ) : (
          <h2>There are no contries in cart</h2>
        )}
      </div>
    </div>
  )
}
