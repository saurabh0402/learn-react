import React, { useEffect, useState } from "react";
import fetch from "node-fetch";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }

    setLoading(true);

    fetch(url)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);

  return [data, error, loading];
}

export default useFetch;
