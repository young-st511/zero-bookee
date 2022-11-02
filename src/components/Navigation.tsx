import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
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
    </>
  );
}

export default Navigation;
