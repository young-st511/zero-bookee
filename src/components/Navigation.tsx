import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <StyledWrapper>
      <ul>
        <li>
          <NavLink
            to={"assets"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            {"자산"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"books"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            {"장부"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"remittance"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            {"송금"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"menu"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            {"메뉴"}
          </NavLink>
        </li>
      </ul>
    </StyledWrapper>
  );
}

export default Navigation;

const StyledWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 390px;

  padding: 20px 0;

  background-color: ${(p) => p.theme.colors.sub};

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    li {
      margin: 0 10px;
    }
  }
`;
