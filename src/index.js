import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotifications />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
