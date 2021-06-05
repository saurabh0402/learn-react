import React, { useEffect } from "react";

import { useData } from "../provider";
import useFetch from "../hooks/fetch";
import useIterator from "../hooks/iterator";

function Repos() {
  const { state, dispatch } = useData();
  const [data, error, loading] = useFetch(
    state.username
      ? `https://api.github.com/users/${state.username}/repos`
      : null
  );

  const [repo, next, prev] = useIterator({ data });

  useEffect(() => {
    dispatch({
      type: "ADD_REPOS_DATA",
      data,
    });
  }, [data]);

  useEffect(() => {
    dispatch({
      type: "SET_CURRENT_REPO",
      data: repo,
    });
  }, [repo]);

  if (error) {
    return <h1> Error Fetching User! </h1>;
  }

  if (loading) {
    return <h1> Fetching user details </h1>;
  }

  if (data) {
    return (
      <div>
        <button onClick={prev}> Prev </button>
        <h3> {repo.name} </h3>
        <button onClick={next}> Next </button>
      </div>
    );
  }

  return <h1> Enter an username to search! </h1>;
}

export default Repos;
