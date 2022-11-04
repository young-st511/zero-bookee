import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../firebaseApp";
import { onAuthStateChanged, User } from "firebase/auth";

function Root() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null);

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log(user, "onAuth");
    //     setIsLoggedIn(true);
    //     setUserObj(user);
    //   } else {
    //     console.log("user signed out");
    //     setUserObj(null);
    //     setIsLoggedIn(false);
    //   }
    //   setInit(true);
    // });
    // if (!isLoggedIn) {
    //   navigate("/auth");
    // }
  });

  return (
    <StyledWrapper>
      <Outlet />
      <Navigation />
    </StyledWrapper>
  );
}

export default Root;

const StyledWrapper = styled.div`
  margin: 20px auto;
`;
