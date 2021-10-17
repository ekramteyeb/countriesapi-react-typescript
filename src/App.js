import { useState } from "react";
import { Container } from "react-bootstrap";

//import CountriesList from "./components/CountriesList";
import SearchComponent from "./components/Search/index";
import Table from "./components/Table/index";

import useFetchCountries from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const url = "https://restcountries.com/v2/all";
  const [data] = useFetchCountries(url);
  const debounceValue = useDebounce(search, 1000);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container fluid hover>
      <header className="header">
        <h1>World Countries</h1>
      </header>
      <main className="main">
        <SearchComponent
          handleChange={handleChange}
          placeholder="search by country name,region, or language"
        />

        <Table
          data={
            debounceValue === ""
              ? data
              : data.filter((country) =>
                  country.name
                    .toLowerCase()
                    .concat(country.region.toLowerCase())
                    .concat(
                      country.languages
                        .map((lang) => lang.name)
                        .toString()
                        .toLowerCase()
                    )
                    .includes(debounceValue.toLowerCase())
                )
          }
        />
      </main>
    </Container>
  );
}

export default App;
