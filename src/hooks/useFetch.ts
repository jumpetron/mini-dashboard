import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
     if (!url) return 
     (async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to load posts");

      const result: T = await response.json();
      setData(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  })();
}, [url]);



  return { data, loading, error };
}

export default useFetch;
