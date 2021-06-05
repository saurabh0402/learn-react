import React, { useState } from "react";

import { useData } from "../provider";

function SearchForm() {
  const [data, setData] = useState("");
  const { state, dispatch } = useData();

  function onSubmit() {
    dispatch({ type: "ADD_USERNAME", data });
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        placeholder="GitHub Username"
      />
      <button onClick={() => onSubmit()}> Search </button>
    </>
  );
}

export default SearchForm;
