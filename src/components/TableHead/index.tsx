import React from "react";

import TableCell from "../TableCell";
import "./index.scss";

type TableHeadProps = {
  handleSort: (input: React.BaseSyntheticEvent) => void;
  sortOrder: boolean;
  sortColumn: string;
};
function TableHead({ handleSort, sortOrder, sortColumn }: TableHeadProps) {
  const tableHeaders = ["Flag", "Name", "Population", "Languages", "Region", ""];
  //console.log('table head is rendering')
  return (
    <thead>
      <tr className="table-row">
        {tableHeaders.map((head) => (
          <TableCell
            key={head}
            name={head}
            sortOrder={sortOrder}
            sortColumn={head.toLowerCase() === sortColumn}
            handleSort={handleSort}
          />
        ))}
      </tr>
    </thead>
  );
}
export default React.memo(TableHead);
/* <th key={head} onClick={handleSort}>
  {head}
</th>;
 */
