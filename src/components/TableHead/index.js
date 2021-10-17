export default function TableHead({ handleSort, arrow }) {
  const tableHeaders = ["Flag", "Name", "Popul", "Languages", "Region"];

  return (
    <tr>
      {tableHeaders.map((head) => (
        <th key={head} onClick={handleSort}>
          {head}
          {arrow}
        </th>
      ))}
    </tr>
  );
}
