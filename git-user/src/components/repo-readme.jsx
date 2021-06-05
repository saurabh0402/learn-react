import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import ReactMarkdown from "react-markdown";

import { useData } from "../provider";

function Readme() {
  const { state } = useData();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state.username && state.currentRepo) {
      setLoading(true);

      fetch(
        `https://api.github.com/repos/${state.username}/${state.currentRepo.name}/readme`
      )
        .then((res) => res.json())
        .then((data) => fetch(data.download_url))
        .then((res) => res.text())
        .then(setData)
        .catch(console.log)
        .finally(() => setLoading(false));
    }
  }, [state.username, state.currentRepo]);

  if (!data) {
    return null;
  }

  if (loading) {
    return <h3> Loading Readme! </h3>;
  }

  return <ReactMarkdown>{data}</ReactMarkdown>;
}

export default Readme;
