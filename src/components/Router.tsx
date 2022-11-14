import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Assets from "../routes/Assets";
import Auth from "../routes/Auth";
import Books from "../routes/Books";
import Menu from "../routes/Menu";
import Remittance from "../routes/Remittance";
import Root from "../routes/Root";
import { ThemeProvider } from "styled-components";
import SignInForm from "../routes/SignIn";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseApp";
import { useRecoilState, useSetRecoilState } from "recoil";
import { theme } from "../themes";
import GlobalStyle from "../styles/GlobalStyle.style";
import { userAuthState } from "../recoil_state";
import Loading from "./Loading";

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
  {
    path: "/*",
    loader: () => redirect("/"),
  },
]);

function AppRouter() {
  const [init, setInit] = useState(false);
  const setIsLoggedIn = useSetRecoilState(userAuthState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //! Test
        console.log(user, "onAuth");

        setIsLoggedIn(user.uid);
      } else {
        //! Test
        console.log("user signed out");

        setIsLoggedIn(null);
      }
      setInit(true);
    });
  }, [setIsLoggedIn]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {init ? (
          <RouterProvider router={router} />
        ) : (
          <Loading text="제로부기에 오신 것을 환영합니다!" />
        )}
      </ThemeProvider>
    </>
  );
}

export default AppRouter;
