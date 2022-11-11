import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { userAuthState, userState } from "../recoil_state";
import Loading from "./Loading";
import LogInForm from "./LogInForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "logIn",
            element: <LogInForm />,
          },
        ],
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
  const [init, setInit] = useState(false);
  const setIsLoggedIn = useSetRecoilState(userAuthState);
  const setUserState = useSetRecoilState<User | null>(userState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //! Test
        console.log(user, "onAuth");

        setIsLoggedIn(true);
        setUserState(user);
      } else {
        //! Test
        console.log("user signed out");

        setUserState(null);
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [setIsLoggedIn, setUserState]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        {/* {init ? (
        ) : (
          <Loading text="제로부기에 오신 것을 환영합니다!" />
        )} */}
      </ThemeProvider>
    </>
  );
}

export default AppRouter;
