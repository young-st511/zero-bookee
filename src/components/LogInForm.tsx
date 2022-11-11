import React, { useState, SetStateAction } from "react";
import styled from "styled-components";
import { auth } from "../firebaseApp";
import { signInWithEmailAndPassword as signIn } from "firebase/auth";

type Props = {
  setIsLogInPage: React.Dispatch<SetStateAction<boolean>>;
};

function LogInForm({ setIsLogInPage }: Props) {
  const [iD, setID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    if (iD != "" && password != "") {
      const data = await signIn(auth, iD, password);
      console.log(data);
    } else {
      throw new Error("ID 또는 Password가 비어있습니다!");
    }
  };
  const handleIDChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setID(target.value);
  };
  const handlePWChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  return (
    <StyledWrapper>
      <button onClick={() => setIsLogInPage(false)} className="back-button">
        {"←"}
      </button>

      <form onSubmit={handleSubmit}>
        <h2>Welcome back!</h2>
        <div className="login-input">
          <input
            name="email"
            type="text"
            placeholder="Email"
            required={true}
            onChange={handleIDChange}
            value={iD}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            onChange={handlePWChange}
            value={password}
          />
        </div>
        <input className="login-submit" type="submit" value="Log in" />
      </form>
    </StyledWrapper>
  );
}

export default LogInForm;

const StyledWrapper = styled.section`
  .back-button {
    font-weight: 900;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 5rem 3rem;
    margin-top: 15rem;

    h2 {
      margin-bottom: 2rem;
    }

    .login-input input {
      width: 24rem;
      height: 3rem;
      margin: 0.4rem 0;
      padding: 0.5rem 1rem;
      color: #262626;
      border: none;
      border-radius: 1rem;
    }
    .login-submit {
      align-self: flex-end;
      margin-top: 2rem;
      margin-right: 3rem;
      padding: 0.6rem 1.2rem;
      background-color: ${(p) => p.theme.colors.sub};
      border: none;
      border-radius: ${(p) => p.theme.borderRadius};

      font-size: 1.6rem;
      font-weight: 700;
    }
  }

  button {
    background: none;
    font-size: 2rem;
  }
`;
