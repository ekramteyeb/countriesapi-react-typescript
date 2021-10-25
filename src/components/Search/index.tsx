import React from "react";
import { Form } from "react-bootstrap";

import "./search.scss";

type PropTypes = {
  placeholder: string;
  // possible to use (//React.BaseSyntheticEvent;)
  handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchComponent = ({ handleChange, placeholder }: PropTypes) => {
  //console.log("search component rendering");
  return (
    <div className="search">
      <Form.Control
        className="search__bar"
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default React.memo(SearchComponent);
