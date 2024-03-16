import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/Context/Items";
import { makeStyles } from "@mui/styles";

ReactDOM.render(
  <ItemsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ItemsProvider>,
  document.getElementById("root")
);
