import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userAuthState } from "../recoil_state";

function Root() {
  const isLoggedin = useRecoilValue(userAuthState);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin) {
      if (location.pathname === "/") {
        navigate("/assets");
      }
    } else if (
      location.pathname !== "/auth" &&
      location.pathname !== "/signIn"
    ) {
      navigate("/auth");
    }
  }, [isLoggedin, location.pathname, navigate]);

  return (
    <StyledWrapper>
      <div className="outlet">
        <Outlet />
      </div>
      {isLoggedin && <Navigation />}
    </StyledWrapper>
  );
}

export default Root;

const StyledWrapper = styled.div`
  .outlet {
    padding: 5vw;
  }
`;
