import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "./provider";

import App from "./components/app";

function WrappedApp() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById("root"));
