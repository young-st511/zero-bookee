import styled from "styled-components";
import { useState } from "react";
import LogInForm from "../components/LogInForm";
import { auth } from "../firebaseApp";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

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
          <h2>제로부기에 오신 것을 환영합니다!</h2>
          <button className="to-log-in" onClick={() => setIsLogInPage(true)}>
            제로부기 아이디로 로그인
          </button>
        </>
      )}
      <h3>SNS로 시작하기</h3>
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
