import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCountries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setData([...response.data]);
    } catch (error) {
      setError(error);
    }
  };
  return [data, error];
};
export default useFetchCountries
