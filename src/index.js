import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { CProvider } from "./services/Context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <CProvider>
    <Router>
      <App />
    </Router>
  </CProvider>,
  document.getElementById("root")
);
