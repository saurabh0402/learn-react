import React, { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  username: "",
  githubData: null,
  repos: [],
  currentRepo: null,
};

const context = createContext();

export const useData = () => useContext(context);

function reducer(state, { type, data }) {
  switch (type) {
    case "ADD_USERNAME": {
      return {
        ...state,
        username: data,
      };
    }
    case "ADD_GITHUB_DATA": {
      return {
        ...state,
        githubData: data,
      };
    }
    case "ADD_REPOS_DATA": {
      return {
        ...state,
        repos: data?.map((e) => e.name),
      };
    }
    case "SET_CURRENT_REPO": {
      return {
        ...state,
        currentRepo: data,
      };
    }
    default:
      return state;
  }
}

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
}
