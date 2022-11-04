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
      {isLogInPage ? (
        <>
          <LogInForm setIsLogInPage={setIsLogInPage} />
        </>
      ) : (
        <>
          <Welcome setIsLogInPage={setIsLogInPage} />
        </>
      )}
      <h3>SNS로 시작하기</h3>
      <StartWithSNS />
      <Link to={"../signIn"}>제로부기 아이디 만들기</Link>
    </StyledWrapper>
  );
}

export default Auth;

const StyledWrapper = styled.div`
  h2,
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;
