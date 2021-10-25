import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//import CountriesList from "./components/CountriesList";
import SearchComponent from "./components/Search";
import Table from "./components/Table/index";
import useFetchCountries from "./hooks/useFetchCountries";
import useDebounce from "./hooks/useDebounce";
import "./App.css";
//import { Country } from "./types";

function App() {
  const [search, setSearch] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState(true);
  const debounceValue = useDebounce(search, 1000);

  const [error, data] = useFetchCountries(debounceValue, sortOrder, sortColumn);

  const handleChange = useCallback((event: React.BaseSyntheticEvent) => {
    setSearch(event.target.value);
  }, []);

  const handleSort = useCallback(
    (event: string) => {
      setSortColumn(event);
      setSortOrder(sortOrder ? false : true);
    },
    [sortOrder]
  );

  return (
    <Container fluid>
      <header className="header">
        <h1>World Countries -Redux -Type script -feature</h1>
      </header>
      <main className="main">
        <SearchComponent
          handleChange={handleChange}
          placeholder="search by country name,region, or language"
        />
        {error !== "" ? (
          "there is error while fetchig data"
        ) : (
          <Table
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            handleSort={handleSort}
            countries={data}
          />
        )}
      </main>
    </Container>
  );
}

export default App;
