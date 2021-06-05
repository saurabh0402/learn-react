import React, { useState } from "react";

import { useData } from "../provider";

import SearchForm from "./search-form";
import GitHubUser from "./github-user";
import Repos from "./github-repos";
import Readme from "./repo-readme";

function App() {
  const {
    state: { username },
  } = useData();

  return (
    <div>
      <SearchForm />
      {username && <GitHubUser />}
      {username && <Repos />}
      {username && <Readme />}
    </div>
  );
}

export default App;
