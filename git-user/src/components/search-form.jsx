import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [data, setData] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        placeholder="GitHub Username"
      />
      <button onClick={() => onSubmit(data)}> Search </button>
    </>
  );
}

export default SearchForm;
