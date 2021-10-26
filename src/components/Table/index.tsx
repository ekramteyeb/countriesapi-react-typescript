import React from "react";
import { useDispatch} from 'react-redux'
import { Table } from "react-bootstrap";

import TableRow from "../TableRow/index";
import TableHead from "../TableHead/index";
import { Country } from "../../types";
import { addCountry } from "../../redux/actions";

type TableProps = {
  countries: Country[];
  sortOrder: boolean;
  sortColumn: string;
  handleSort: (elemnt : any) => void;
};
//Colomn Sorting is implemented now
function TableData({
  countries,
  sortOrder,
  sortColumn,
  handleSort,

}: TableProps) {
  const dispatch = useDispatch()
  return (
    <Table striped hover>
      <TableHead
        sortOrder={sortOrder}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />

      <tbody>
        {countries.map((country: Country) => (
          <TableRow key={country.name} country={country} 
            handleClick={() => dispatch(addCountry(country))}  />
        ))}
      </tbody>
    </Table>
  );
}

export default React.memo(TableData);
