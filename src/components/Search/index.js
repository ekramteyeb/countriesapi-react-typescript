import { Form } from 'react-bootstrap'

import './search.scss'

const SearchComponent = ({ handleChange, placeholder }) => {
  
    return (
      <div className="search">
        <Form.Control className="search__bar" type="text" onChange={handleChange} placeholder={placeholder} />
      </div>
    );
}; 

export default SearchComponent