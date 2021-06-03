import React from "react";

function GitHubUser({ data, error, loading }) {
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
