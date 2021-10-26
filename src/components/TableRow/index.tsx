import React from "react";

import Flag from "../Flag/";
import { Country } from "../../types";
import ButtonComponent from "../Button";
import './index.scss'
import { useTheme } from "../../context/Context";

type TableRowProps ={
  country: Country, 
  handleClick :  (input: React.BaseSyntheticEvent) => void, 
 
}
function TableRow({
  country: {
    flag,
    name,
    population,
    languages,
    region,
  },handleClick
}: TableRowProps) {
  const { theme } = useTheme()

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
      <td ><ButtonComponent handleClick={handleClick}  text='add ' color={theme}/></td>

    </tr>
  );
}

export default TableRow;
