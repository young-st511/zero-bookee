import {
  AuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { ButtonHTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { auth, db } from "../firebaseApp";
import { logInPageState } from "../recoil_state";

function StartWithSNS() {
  const isLoginPage = useRecoilValue(logInPageState);
  const navigate = useNavigate();

  const handleSNSClick = async ({
    currentTarget: target,
  }: React.PointerEvent<HTMLButtonElement>) => {
    let provider: AuthProvider | null;

    switch (target.name) {
      case "google":
        provider = new GoogleAuthProvider();
        break;

      default:
        provider = null;
        break;
    }

    if (!provider) {
      console.error("SNS 버튼 오류 발생!");
      return;
    }
    
    const { user } = await signInWithPopup(auth, provider);
    //! Test
    console.log("user", user);

    const userDoc = await getDoc(doc(db, `UserInfo/${user.uid}`)).then((res) =>
      res.data()
    );

    if (!userDoc) {
      navigate("/signIn");
    }
  };

  return (
    <StartWithSNSWrapper isLogin={isLoginPage}>
      <h3 className="startSNS">SNS로 시작하기</h3>
      <div className="sns">
        <button name="google" className="start-sns" onClick={handleSNSClick}>
          Start with Google
        </button>

        {/* <button name="naver" className="start-sns" onClick={handleSNSClick}>
          Start with Naver
        </button> */}

        <Link to={"/signIn"} className="to-sign-in">
          제로부기 아이디 만들기
        </Link>
      </div>
    </StartWithSNSWrapper>
  );
}

export default StartWithSNS;

interface styleProps {
  isLogin: boolean;
}

const StartWithSNSWrapper = styled.div<styleProps>`
  position: absolute;
  width: 80vw;
  top: ${({ isLogin }) => (isLogin ? "45vh" : "20vh")};
  left: 0;
  margin: 10vh 0vw;

  h3.startSNS {
    font-size: 3.2rem;
    font-weight: 900;
    text-align: center;
  }

  .sns {
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    padding: 1rem 3rem;

    button.start-sns {
      margin: 1rem 2rem;
      padding: 1rem 1rem;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
    .to-sign-in {
      display: block;
      margin-top: 4rem;
      width: 100%;
      padding-left: 0.2rem;
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;
