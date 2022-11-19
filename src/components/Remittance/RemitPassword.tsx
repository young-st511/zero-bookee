import {
  Dispatch,
  PointerEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import styled from "styled-components";
import { RemitFormType } from "../../routes/Remittance";

const makeRandomNumPad = () => {
  const numSet = new Set<number>();
  while (numSet.size < 10) {
    numSet.add(Math.round(Math.random() * 9));
  }
  const numArr = [...numSet];

  return numArr;
};

const checkPW = (password: string) => {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
};

interface RemitPwProps {
  getPW: boolean;
  setGetPW: Dispatch<SetStateAction<boolean>>;
}

function RemitPassword({ getPW, setGetPW }: RemitPwProps) {
  const [numpad, setNumpad] = useState<number[]>([]);
  const [password, setPassword] = useState("");
  useEffect(() => {
    const numpad = makeRandomNumPad();
    setNumpad(numpad);
  }, []);

  if (!getPW) {
    return <></>;
  }

  const numClick = ({ target: eTarget }: PointerEvent<HTMLDivElement>) => {
    const target = eTarget as HTMLButtonElement;
    if (target.tagName !== "BUTTON") {
      return;
    }
    console.log(target.value);
    setPassword(password + target.value);
  };

  const bluredPW = Array.from(password).map((num) => {
    return "*";
  });

  if (password.length >= 6) {
    if (checkPW(password)) {
      setGetPW(false);
    }
  }

  return (
    <>
      <StyledRemitPassword>
        <div className="numpad" onClick={numClick}>
          <div className="num-display">{bluredPW.join("")}</div>
          <div className="numbers">
            {numpad.map((num) => (
              <button type="button" key={num} value={num}>
                {num}
              </button>
            ))}
            <button type="button"></button>
            <button type="button" className="back-button" value={"back"}>
              ←
            </button>
          </div>
        </div>
        <div className="background" />
      </StyledRemitPassword>
    </>
  );
}

export default RemitPassword;

const StyledRemitPassword = styled.div`
  position: absolute;
  top: -5vw;
  left: -5vw;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  .background {
    position: absolute;
    background-color: #000;
    top: 0vw;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    z-index: 1;
  }
  .numpad {
    position: absolute;
    width: 100vw;
    bottom: 0;
    .num-display {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 6rem;
      bottom: 48vh;

      text-align: center;
      font-size: 2.4rem;
      font-weight: 700;

      background-color: ${(p) => p.theme.colors.background};
      z-index: 1000;
    }
    .numbers {
      position: absolute;
      display: grid;
      opacity: 1;

      width: 100vw;
      height: 41vh;

      bottom: 0;
      padding-bottom: 7vh;
      background-color: ${(p) => p.theme.colors.background};
      z-index: 10000;

      grid: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
      button {
        font-size: 3.4rem;
        font-weight: 600;
        border: 1px solid ${(p) => p.theme.colors.background};
      }
    }
  }
`;
