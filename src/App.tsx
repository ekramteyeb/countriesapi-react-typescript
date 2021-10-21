import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//import CountriesList from "./components/CountriesList";
import SearchComponent from "./components/Search";
import Table from "./components/Table/index";
import useFetchCountries from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import "./App.css";
import { Country } from "./types";

function App() {
  const [search, setSearch] = useState<string>("");
  const [error, data] = useFetchCountries();
  const debounceValue = useDebounce(search, 1000);

  const handleChange = useCallback((event: React.BaseSyntheticEvent) => {
    setSearch(event.target.value);
  }, []);

  return (
    <Container fluid>
      <header className="header">
        <h1>World Countries -Type script</h1>
      </header>
      <main className="main">
        <SearchComponent
          handleChange={handleChange}
          placeholder="search by country name,region, or language"
        />
        <Table
          countries={
            debounceValue === ""
              ? data
              : data.filter((country: Country) =>
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
