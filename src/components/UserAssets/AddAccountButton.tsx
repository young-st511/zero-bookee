import { Dispatch } from "react";
import styled from "styled-components";

interface AddAcountProp {
  active: boolean;
  setActive: Dispatch<React.SetStateAction<boolean>>;
}

function AddAcountButton({ active, setActive }: AddAcountProp) {
  return (
    <Button
      type="button"
      className={active ? "active" : undefined}
      onClick={() => setActive(!active)}
      id="add-asset-button"
    >
      <span>+</span>
    </Button>
  );
}

export default AddAcountButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.5rem;
  height: 4.5rem;
  box-sizing: border-box;
  border-radius: 100%;

  rotate: 0deg;
  background-color: ${(p) => p.theme.colors.point};

  &.active {
    rotate: -45deg;
    background-color: ${(p) => p.theme.colors.background};
    border: 2px solid ${(p) => p.theme.fontColor};
    span {
      color: ${(p) => p.theme.fontColor};
    }
  }

  span {
    font-size: 5rem;
    font-weight: 300;
    color: ${(p) => p.theme.subFont};
    text-align: center;

    transform: translateX(0.03rem) translateY(0.02rem);
  }
`;
