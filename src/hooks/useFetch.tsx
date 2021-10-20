import { useEffect, useState } from "react";

import { Country } from "../types";

const useFetch = (): [Error | unknown, Country[]] => {
  const [data, setData] = useState<Country[]>([]);
  const [error, setError] = useState<unknown>(null);

  const url = "https://restcountries.com/v2/all";

  const loadData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return [error, data];
};
export default useFetch;
