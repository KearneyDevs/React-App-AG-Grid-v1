import { useState, useEffect } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData: T = await response.json();
        setData(responseData);
      } catch (error: any) {
        // Ignore error when aborting the request
        if (!signal.aborted) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      abortController.abort(); // Abort the fetch request on cleanup
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
