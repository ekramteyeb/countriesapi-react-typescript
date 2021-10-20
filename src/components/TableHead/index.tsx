import React from "react";

import "./index.scss";

type TableHeadProps = {
  handleSort: (input: React.BaseSyntheticEvent) => void;
  arrow: JSX.Element;
};
export default function TableHead({ handleSort, arrow }: TableHeadProps) {
  const tableHeaders = ["Flag", "Name", "Population", "Languages", "Region"];

  return (
    <thead>
      <tr className="table-row">
        {tableHeaders.map((head) => (
          <th key={head} onClick={handleSort}>
            {head}
            {arrow}
          </th>
        ))}
      </tr>
    </thead>
  );
}
