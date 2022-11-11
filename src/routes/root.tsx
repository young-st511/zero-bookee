import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userAuthState } from "../recoil_state";
import Auth from "./Auth";

function Root() {
  const isLoggedin = useRecoilValue(userAuthState);
  const location = useLocation();
  const navigate = useNavigate();

  if (isLoggedin) {
    if (location.pathname === "/") {
      navigate("/assets");
    }
  }

  return (
    <StyledWrapper>
      {isLoggedin ? (
        <div className="outlet">
          <Outlet />
        </div>
      ) : (
        <Auth />
      )}

      <Navigation />
    </StyledWrapper>
  );
}

export default Root;

const StyledWrapper = styled.div`
  padding: 20px 0px;
`;
