import { Card, Button} from "react-bootstrap"
import { Country } from "../../types/country"

import './index.scss'
type CountryCardTypes = {
  country: Country,
  handleRemove:(input:React.BaseSyntheticEvent) => void
}
export function CountryCard({
  country: { name, flag, population, region, languages },
  handleRemove
}: CountryCardTypes) {
  return (
    <div className="country__Card__div" >
      <Card style={{ width: '18rem' }} className="country__Card">
        <Card.Img variant="top" src={flag} className="card__Img"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Population: {population} <br />
            Region : {region} <br />
            Languages: {languages.map((lan) => lan.name + ' ')}
          </Card.Text>
          <Button variant="primary" onClick={handleRemove}>Remove</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
