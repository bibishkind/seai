import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import "animate.css";
import App from "./components/App/App";
import Examples from "./components/Examples/Examples";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<Examples></Examples>*/}
  </React.StrictMode>,
);
