import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Country } from '../../types/country'

import './index.scss'
type CountryCardTypes = {
  country: Country
  handleRemove: (input: React.BaseSyntheticEvent) => void
}
export function CountryCard({
  country: { name, flag, population, region},
  handleRemove,
}: CountryCardTypes) {
  return (
    <div className="country__Card__div">
      <Card style={{ width: '15rem' }} className="country__Card">
        <Card.Img variant="top" src={flag} className="card__Img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Population: {population} <br />
            Region : {region} <br />
          </Card.Text>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>||
          <Button variant="info">
            <Link to={`/countries/${name}`} >See more</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
