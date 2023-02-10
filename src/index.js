import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tic-tac-toe.css";
import "./styles/rock-paper-scissors.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
