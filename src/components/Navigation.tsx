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
  padding: 2rem 0;

  background-color: ${(p) => p.theme.colors.sub};

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    list-style: none;
    li a {
      box-sizing: border-box;
      margin: 0 1rem;
      padding: 1rem 2rem;

      &.pending {
        color: ${(p) => p.theme.colors.main};
      }
      &.active {
        background-color: ${(p) => p.theme.colors.main};
      }
    }
  }
`;
