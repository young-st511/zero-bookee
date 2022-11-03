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
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Log in" />
      </form>
    </StyledWrapper>
  );
}

export default LogInForm;

const StyledWrapper = styled.section`
  button.back-button {
    font-feature-settings: "ss18";
  }
`;
