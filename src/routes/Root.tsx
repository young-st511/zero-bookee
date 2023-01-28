import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userAuthState } from "../recoil_state";

function Root() {
  const isLoggedin = useRecoilValue(userAuthState);
  const location = useLocation();
  const navigate = useRef(useNavigate());

  //TODO signIn 페이지 처리!!
  useEffect(() => {
    const path = location.pathname;
    if (isLoggedin) {
      if (path === "/" || path === "/auth") {
        navigate.current("/assets");
      }
    } else if (path !== "/auth" && path !== "/signIn") {
      navigate.current("/auth");
    }
  }, [isLoggedin, location.pathname]);

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
