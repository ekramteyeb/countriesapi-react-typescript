import { useState, useEffect } from "react";

const useDebounce = (value, timeout) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [value, timeout]);

  return debounceValue;
};

export default useDebounce;
