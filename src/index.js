import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
