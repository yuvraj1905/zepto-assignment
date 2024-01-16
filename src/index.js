import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GroupContextComponent } from "./context/useGroupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GroupContextComponent>
      <App />
    </GroupContextComponent>
  </React.StrictMode>
);
