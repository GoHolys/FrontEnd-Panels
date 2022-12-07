import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setData(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { isLoading, data };
};

export default useFetch;