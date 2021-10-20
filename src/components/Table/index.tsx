import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

import TableRow from "../TableRow/index";
import TableHead from "../TableHead/index";
import { Country } from "../../types";

type TableProps = {
  countries: Country[];
};
//Colomn Sorting is not implemented yet
function TableData({ countries }: TableProps) {
  const sortObject = {
    flag: true,
    name: true,
    population: true,
    languages: true,
    region: true,
  };
  const [condition, setCondtion] = useState({ ...sortObject });
  //const [filter, setFilter] = useState("");

  const handleSort = (event: { currentTarget: { tagName: string } }) => {
    //let colomn = event.currentTarget.tagName;
    //setFilter(colomn);
    setCondtion({ ...condition, flag: !condition.flag });
  };
  return (
    <Table striped hover>
      <TableHead
        arrow={condition.flag ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
        handleSort={handleSort}
      />
      
      <tbody>
        {countries.map((country: Country) => (
          <TableRow key={country.name} country={country} />
        ))}
      </tbody>
    </Table>
  );
}

export default React.memo(TableData);
