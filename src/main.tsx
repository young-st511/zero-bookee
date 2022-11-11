import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import AppRouter from "./components/Router";

import "./index.css";
import Test from "./Test";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>
);
