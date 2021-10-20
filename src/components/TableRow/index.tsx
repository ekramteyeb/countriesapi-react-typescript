import React from "react";

import Flag from "../Flag/";
import { Country } from "../../types";
import "./index.scss"

type TableRowProps ={
  country: Country
}
function TableRow({
  country: {
    flag,
    name,
    population,
    languages,
    region,
  },
}: TableRowProps) {
  return (
    <tr className="table-row">
      <td><Flag url={flag} /></td>
      <td>{name}</td>
      <td>{population}</td>
      <td>
        {languages.map((lan) => (
          <li key={lan.name}>{lan.name}</li>
        ))}
      </td>
      <td>{region}</td>
    </tr>
  );
}

export default TableRow;
