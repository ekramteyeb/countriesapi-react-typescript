import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Country } from '../../types/country'

import './index.scss'

type CountryCardSingleTypes = {
  country: Country
  handleRemove: (input: React.BaseSyntheticEvent) => void
}
export function CountryCardSingle({
  country: {
    name,
    flag,
    population,
    region,
    languages,
    nativeName,
    area,
    capital,
  },
}: CountryCardSingleTypes) {
  return (
    <div className="singleCountry__Card__div">
      <div>
        <h1>{name}</h1>
      </div>
      <Card style={{ width: '39rem' }} className="singleCountry__Card">
        <Card.Img variant="top" src={flag} className="card__Image" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Capital : {capital} <br />
            Population: {population} <br />
            Region : {region} <br />
            Languages : {languages.map((lan) => lan.name).toString()} <br />
            NativeName : {nativeName} <br />
            Area : {area} (square km)
          </Card.Text>
          <Button variant="info">
            <Link to="/countries/">Go back</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
