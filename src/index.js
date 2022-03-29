import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

rms.onPluginLoaded(function () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
