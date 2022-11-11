import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import StyledInput from "../styles/StyledInput.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { logInPageState } from "../recoil_state";
import { useNavigate } from "react-router-dom";

function LogInForm() {
  const [iD, setID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [IsLogInPage, setIsLogInPage] = useRecoilState(logInPageState);
  const navigate = useNavigate();

  const handleBackClick = () => {
    setIsLogInPage(false);
    navigate("../");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    try {
      if (iD != "" && password != "") {
        const data = await signInWithEmailAndPassword(auth, iD, password);
        //! Test
        console.log(data);
      } else {
        throw new Error("ID 또는 Password가 비어있습니다!");
      }
    } catch (err) {
      const error = err as FirebaseError;
      if (error) {
        setError(error?.message);
        console.log(error?.message);
        alert(error?.message);
      }
    }
  };
  const handleIDChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setID(target.value);
  };
  const handlePWChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  return (
    <StyledWrapper isLogin={IsLogInPage}>
      <button onClick={handleBackClick} className="back-button">
        {"←"}
      </button>

      <form onSubmit={handleSubmit}>
        <h2>Welcome back!</h2>
        <div className="login-input">
          <StyledInput
            name="email"
            type="text"
            placeholder="Email"
            required={true}
            onChange={handleIDChange}
            value={iD}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            onChange={handlePWChange}
            value={password}
          />
        </div>
        <p role={"alert"} className={"login-error"}>
          Error:{error}
        </p>
        <input className="login-submit" type="submit" value="Log in" />
      </form>
    </StyledWrapper>
  );
}

export default LogInForm;

interface StyledProp {
  isLogin: boolean;
}

const StyledWrapper = styled.section<StyledProp>`
  /* opacity: ${({ isLogin }) => (isLogin ? 1 : 0)}; */
  .back-button {
    margin-top: 2rem;
    font-weight: 900;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 5rem 0rem;
    margin-top: 5rem;

    .login-input {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    h2 {
      margin-bottom: 2rem;
      margin-left: 2rem;
    }

    .login-submit {
      align-self: center;
      margin-top: 2rem;
      padding: 0.8rem 1.6rem;
      background-color: ${(p) => p.theme.colors.sub};
      border: none;
      border-radius: ${(p) => p.theme.borderRadius};

      font-size: 1.6rem;
      font-weight: 700;
    }

    .login-error {
      color: ${(p) => p.theme.errorColor};
    }
  }

  button {
    background: none;
    font-size: 2rem;
  }
`;
