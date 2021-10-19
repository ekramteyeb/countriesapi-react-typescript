import React from "react";
import "./style.scss";

function TableCell({ input, arrow }) {
  return (
    <td className="table__data">
      {input}
      {arrow}
    </td>
  );
}

export default React.memo(TableCell);
