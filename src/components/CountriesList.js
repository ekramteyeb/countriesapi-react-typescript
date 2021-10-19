import { Table } from "react-bootstrap";

import Country from "./Country";

const CountriesList = ({ countries }) => {
  return (
    <div>
      <Table striped>
        <tbody>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Language</th>
            <th>Region</th>
          </tr>
          {countries.map((country) => (
            <tr key={country.name}>
              <Country country={country} />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default CountriesList;
