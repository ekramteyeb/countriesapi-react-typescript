import { Form } from 'react-bootstrap'

const SearchComponent = ({ handleChange, placeholder }) => {
    return (
      <div>
        <Form.Control type="text" onChange={handleChange} placeholder={placeholder} />
      </div>
    );
}; 

export default SearchComponent