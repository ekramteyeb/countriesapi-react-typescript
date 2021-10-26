import { useEffect, useState } from "react";

import { Country } from "../types";

const useFetch = (
  search: string,
  sortOrder: boolean,
  sortColumn: string
): [Error | unknown, Country[]] => {
  const [data, setData] = useState<Country[]>([]);
  const [error, setError] = useState<unknown>("");
  const [filterdCountries, setFilterdCountries] = useState<Country[]>([]);

  const url = "https://restcountries.com/v2/all";

  const loadData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.message ?  setError('something went wrong') : setData(data) ;
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    let filterdCountries = data.filter((country: Country) =>
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
    );
    //console.log(filterdCountries, "filterdContries ");

    // sort array of object by property name
    let sortArray = (arr: [] | any, sortBy: string, isAsending: boolean) => {
      //let firstCountry = arr.length > 0 ? arr[arr.length - 1][sortBy] : "";
      if (arr.length > 0) {
        let sorted =
          typeof arr[0][sortBy] === "number"
            ? arr.sort((a: any, b: any) => a[sortBy] - b[sortBy])
            : Array.isArray(arr[0][sortBy])
              ? arr.sort((a: any, b: any) => a[sortBy].length - b[sortBy].length)
              : arr.sort((a: any, b: any) => {
                if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1;
                if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase())
                  return -1;
                return 0;
              });

        return isAsending ? sorted : sorted.reverse();
      }
    };

    sortArray(
      filterdCountries,
      sortColumn,
      sortOrder
    );
    // console.log(filterdSortedCountries, "filterd and sorted countries");

    setFilterdCountries(filterdCountries);
  }, [data, search, sortColumn, sortOrder]);

  return [error, filterdCountries];
};

export default useFetch;
