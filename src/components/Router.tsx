import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assets from "../routes/Assets";
import Auth from "../routes/Auth";
import Books from "../routes/Books";
import Menu from "../routes/Menu";
import Remittance from "../routes/Remittance";
import Root from "../routes/root";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SignInForm from "./SignInForm";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseApp";

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
        path: "signIn",
        element: <SignInForm />,
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
  // const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userObj, setUserObj] = useState<User | null>(null);
  // const [isNaver, setIsNaver] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user, "onAuth");
  //       setIsLoggedIn(true);
  //       setUserObj(user);
  //     } else {
  //       console.log("user signed out");
  //       setUserObj(null);
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //   });
  // }, []);

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
  * {
    font-family: SUIT;
  }
  body {
    margin: 0;
    align-items: center;
  }
`;
