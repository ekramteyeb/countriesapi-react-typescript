import React from 'react'
import TableCell from "../TableCell/index";
import Flag from "../Flag/index";

function TableRow ({ country : {flags:{png}, name ,population, languages,region } }) {
  
  return (
    <tr>
      <TableCell input={<Flag url={png} />} />
      <TableCell input={name} />
      <TableCell input={population} />
      <TableCell
        input={languages.map((lan) => (
          <li key={lan.name}>{lan.name}</li>
        ))}
      />
      <TableCell input={region} />
    </tr>
  );
};

export default TableRow