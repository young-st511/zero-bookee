import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppRouter from "./components/Router";

import "./index.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    align-items: center;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
);
