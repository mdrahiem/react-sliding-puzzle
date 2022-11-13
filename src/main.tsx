import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./scss/index.scss";
import "./scss/media-queries.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
