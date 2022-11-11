import styled from "styled-components";
import { useState } from "react";

import StartWithSNS from "../components/StartWithSNS";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { logInPageState } from "../recoil_state";
import LogInForm from "../components/LogInForm";
import Test from "../Test";

function Auth() {
  const [isLogInPage, setIsLogInPage] = useRecoilState(logInPageState);

  return (
    <StyledWrapper>
      <Test />
      <h2 className="welcome">
        제로부기에 오신 것을
        <br />
        환영합니다!
      </h2>
      {isLogInPage ? (
        <>
          <LogInForm />
        </>
      ) : (
        <>
          <div onClick={() => setIsLogInPage(true)}>
            <Link to={"login"} className="to-log-in">
              제로부기 아이디로 로그인
            </Link>
          </div>
        </>
      )}

      <StartWithSNS />
    </StyledWrapper>
  );
}

export default Auth;

const StyledWrapper = styled.div`
  position: relative;
  margin: 2rem;
  h2.welcome {
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .to-log-in {
    padding: 0 0.1rem;
    background: none;
    text-decoration: underline;
  }
`;
