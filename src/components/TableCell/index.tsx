import React from 'react'
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

type PropTyes = {
    name: string,
    sortOrder : string | boolean,
    sortColumn : string | boolean,
    handleSort : (name : string | any) => void
}
const TableCell = ({
  name,
  sortOrder,
  sortColumn,
  handleSort
} : PropTyes) => {
  return (
    <th onClick={() => handleSort(name.toLowerCase())}>
      {name}
      {sortColumn ? sortColumn && sortOrder ? (
        <span >
          <ArrowUp />
        </span>
      ): (
        <span >
          <ArrowDown />
        </span>
      ) : ''}
    </th>
  )
}

export default TableCell
