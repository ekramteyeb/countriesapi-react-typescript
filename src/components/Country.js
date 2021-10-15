import { Image } from "react-bootstrap";

const Country = ({ country }) => {
  return (
    <>
      <td>
        <Image src={country.flags.png} fluid />
      </td>
      <td>{country.name}</td>
      <td>{country.population}</td>
      <td>
        <ul>
          {country.languages.map((lan) => (
            <li key={lan.name}>{lan.name}</li>
          ))}
        </ul>
      </td>
      <td>{country.region}</td>
    </>
  );
};

export default Country;
