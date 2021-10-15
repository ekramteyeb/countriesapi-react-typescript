import { useState } from "react";

import CountriesList from "./components/CountriesList";
import SearchComponent from "./components/SearchComponent";

import useFetchCountries from "./components/useFetchCountries";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const [data] = useFetchCountries();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Countries</h1>
      </header>
      <main className="main">
        <SearchComponent
          handleChange={handleChange}
          placeholder="search by country name,region, or language"
        />
        <CountriesList
          countries={
            search === ""
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
                    .includes(search.toLowerCase())
                )
          }
        />
      </main>
    </div>
  );
}

export default App;
