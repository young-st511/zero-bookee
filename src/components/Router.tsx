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
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseApp";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { theme } from "../themes";
import GlobalStyle from "../styles/GlobalStyle.style";
import { userAuthState, userState } from "../recoil_state";
import Loading from "./Loading";
import AddAccount from "../routes/AddAccount";
import { collection, doc, onSnapshot } from "firebase/firestore";
import UserInfoType from "../types/userInfoType";

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
        path: "assets/add",
        element: <AddAccount />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "remittance/:accountID",
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
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userAuthState);
  const setUserInfo = useSetRecoilState(userState);
  const userInfo = useRecoilValue(userState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // setInit(false);
      if (user) {
        setIsLoggedIn(user.uid);
        //! Test
        console.log("onAuth", user);
      } else {
        //! Test
        console.log("user signed out");

        setIsLoggedIn(null);
      }
      setInit(true);
    });

    const unSub = onSnapshot(
      doc(db, `UserInfo/${auth.currentUser?.uid}`),
      (snapshot) => {
        //! Test
        setInit(false);
        console.log("Set", userInfo);

        setUserInfo(snapshot.data() as UserInfoType);

        setInit(true);
      }
    );

    if (isLoggedIn === null) {
      console.log("unsub");
      unSub();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

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
