import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseApp";
import { theme } from "../themes";

function StartWithSNS() {
  const handleSNSClick = async ({
    currentTarget: target,
  }: React.PointerEvent<HTMLButtonElement>) => {
    let provider;
    switch (target.name) {
      case "google":
        provider = new GoogleAuthProvider();
        break;

      default:
        break;
    }
    if (!provider) {
      console.log("SNS 버튼 오류 발생!");
      return;
    }
    const data = await signInWithPopup(auth, provider);
    //! Test
    console.log(data);
  };
  
  return (
    <StartWithSNSWrapper>
      <h3 className="startSNS">SNS로 시작하기</h3>
      <div className="sns">
        <button name="google" className="start-google" onClick={handleSNSClick}>
          Start with Google
        </button>
      </div>

      <Link to={"../signIn"} className="to-sign-in">
        제로부기 아이디 만들기
      </Link>
    </StartWithSNSWrapper>
  );
}

export default StartWithSNS;

// import { Dispatch, SetStateAction } from "react";

// type StartWithSNSType = {
//   isNaver: boolean;
//   setIsNaver: Dispatch<SetStateAction<boolean>>;
// };

const StartWithSNSWrapper = styled.div`
  margin: 10rem 2rem;
  h3.startSNS {
    font-size: 3.2rem;
    font-weight: 900;
  }

  .to-sign-in {
    display: block;
    width: 100%;
    padding-left: 0.2rem;
    font-size: 1.6rem;
    text-align: center;
  }

  .sns {
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    padding: 1rem 3rem;
    button {
      margin: 1rem 2rem;
      padding: 1rem 1rem;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }
`;
