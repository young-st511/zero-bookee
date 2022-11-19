import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import AddAcountButton from "./AddAccountButton";

function AddMenu() {
  const [active, setActive] = useState(false);
  type ClickEvent = React.PointerEvent<HTMLDivElement>;

  const handleModalClick = ({ currentTarget }: ClickEvent) => {
    if (currentTarget.id === "blind") {
      setActive(false);
    }
  };

  return (
    <>
      <MenuBlind
        className={`${active ? "active" : undefined}`}
        id={"blind"}
        onClick={handleModalClick}
      />
      <StyledAddAcount className={`${active ? "active" : undefined}`}>
        <ul className={`add-menu ${active ? "active" : undefined}`}>
          <li>
            <Link to={"add"}>계좌 추가</Link>
          </li>
          <li>
            <Link to={"add"}>부채 추가</Link>
          </li>
          <li>
            <Link to={"add"}>수익 추가</Link>
          </li>
          <li>
            <Link to={"add"}>지출 추가</Link>
          </li>
        </ul>
        <AddAcountButton active={active} setActive={setActive} />
      </StyledAddAcount>
    </>
  );
}

export default AddMenu;

const fadeInOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.3;
  }
`;

const showMenu = keyframes`
  from {
    opacity: 0;
    right: -40vw;
  }
  to {
    opacity: 1;
    right: 0vw;
  }
`;

const MenuBlind = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0);
  opacity: 0;
  z-index: 100;

  overflow: hidden;

  &.active {
    display: block;
    animation: ${fadeInOut} 0.2s ease-in-out 1 normal forwards;
  }
`;

const StyledAddAcount = styled.div`
  position: absolute;
  display: flex;
  width: 9rem;
  padding-top: 30rem;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2.5rem 2.5rem;
  right: 0rem;
  bottom: ${(p) => p.theme.navHight};
  z-index: 1000;

  overflow: hidden;

  &.active {
    padding-top: 30rem;
  }

  .add-menu {
    display: none;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 600;

    position: absolute;

    bottom: 5rem;
    /* transition: right 0.2s ease-in-out, opacity 0.1s ease-in-out; */

    margin: 2.5rem 2.5rem;

    &.active {
      display: flex;
      animation: ${showMenu} 0.2s ease-in-out 1 normal forwards;
    }

    li {
      display: flex;
      width: 8.8rem;
      height: 4.7rem;
      margin: 0.5rem 0;

      align-items: center;
      justify-content: center;
      text-align: center;

      border-radius: ${(p) => p.theme.borderRadius};
      background-color: ${(p) => p.theme.colors.main};
    }
  }
`;
