import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./Context";

ReactDOM.render(
  <DataProvider>
    <Router basename="corona-stats">
      <App />
    </Router>
  </DataProvider>,
  document.getElementById("root")
);
