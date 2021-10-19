import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

import TableRow from "../TableRow/index";
import TableHead from "../TableHead";

function TableData({ data }) {
  const sortObject = {
    flag: true,
    name: true,
    population: true,
    languages: true,
    region: true,
  };
  const [condition, setCondtion] = useState({ ...sortObject });
  const [filter, setFilter] = useState("");

  const handleSort = (e) => {
    let colomn = e.target.textContent.toLowerCase();
    console.log(filter)
    setFilter(colomn);
    setCondtion({ ...condition, flag: !condition.flag });
  };

  return (
    <Table striped hover>
      <tbody>
        <TableHead
          arrow={
            condition.flag ? <ArrowUp size={15} /> : <ArrowDown size={15} />
          }
          handleSort={handleSort}
        />

        {data.map((country) => (
          <TableRow key={country.name} country={country} />
        ))}
      </tbody>
    </Table>
  );
}

export default React.memo(TableData);
