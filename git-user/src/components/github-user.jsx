import React, { useEffect } from "react";

import { useData } from "../provider";
import useFetch from "../hooks/fetch";

function GitHubUser() {
  const { state, dispatch } = useData();
  const [data, error, loading] = useFetch(
    state.username ? `https://api.github.com/users/${state.username}` : null
  );

  useEffect(() => {
    dispatch({
      type: "ADD_GITHUB_DATA",
      data,
    });
  }, [data]);

  if (error) {
    return <h1> Error Fetching User! </h1>;
  }

  if (loading) {
    return <h1> Fetching user details </h1>;
  }

  if (data) {
    return (
      <div>
        <img src={data.avatar_url} />
        <h2> {data.name} </h2>
      </div>
    );
  }

  return <h1> Enter an username to search! </h1>;
}

export default GitHubUser;
