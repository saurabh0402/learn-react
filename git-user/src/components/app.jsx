import React, { useState } from "react";

import useFetch from "../hooks/fetch";

import SearchForm from "./search-form";
import GitHubUser from "./github-user";

function App() {
  const [username, setUsername] = useState("");
  const [data, error, loading] = useFetch(
    username ? `https://api.github.com/users/${username}` : null
  );

  return (
    <div>
      <SearchForm onSubmit={setUsername} />
      <GitHubUser data={data} error={error} loading={loading} />
    </div>
  );
}

export default App;
