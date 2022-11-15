import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddAcountButton from "./AddAccountButton";

function AddMenu() {
  const [active, setActive] = useState(false);
  return (
    <StyledAddAcount>
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
  );
}

export default AddMenu;

const StyledAddAcount = styled.div`
  position: absolute;
  display: flex;
  width: 9rem;
  padding-top: 30rem;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 2.5rem;
  right: 0rem;
  bottom: ${(p) => p.theme.navHight};

  overflow: hidden;

  .add-menu {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 600;

    position: absolute;
    opacity: 0;
    right: -40vw;
    bottom: 5rem;
    transition: right 0.2s ease-in-out, opacity 0.1s ease-in-out;

    margin-bottom: 1rem;

    &.active {
      opacity: 1;
      right: 0vw;
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
