import { useState, useEffect } from "react";

const useDebounce = (value: string, timeout: number | undefined) => {
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
