import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assets from "../routes/Assets";
import Auth from "../routes/Auth";
import Books from "../routes/Books";
import Menu from "../routes/Menu";
import Remittance from "../routes/Remittance";
import Root from "../routes/root";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "assets",
        element: <Assets />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "remittance",
        element: <Remittance />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);

function AppRouter() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default AppRouter;

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    align-items: center;

    font-family: SUIT
  }
`;
