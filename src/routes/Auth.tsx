import styled from "styled-components";
import { useState } from "react";
import LogInForm from "../components/LogInForm";

import StartWithSNS from "../components/StartWithSNS";
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";

function Auth() {
  const [isLogInPage, setIsLogInPage] = useState(false);
  return (
    <StyledWrapper>
      <h2 className="welcome">제로부기에 오신 것을 환영합니다!</h2>
      {isLogInPage ? (
        <>
          <LogInForm setIsLogInPage={setIsLogInPage} />
        </>
      ) : (
        <>
          <div>
            <button className="to-log-in" onClick={() => setIsLogInPage(true)}>
              제로부기 아이디로 로그인
            </button>
          </div>
        </>
      )}
      
      <StartWithSNS />

    </StyledWrapper>
  );
}

export default Auth;

const StyledWrapper = styled.div`
  h2.welcome {
    margin-bottom: 1rem;
  }
  .to-log-in {
    padding: 0 0.1rem;
    background: none;
    text-decoration: underline;
  }


`;
