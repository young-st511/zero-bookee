import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import styled from "styled-components";

function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <StyledWrapper>
      <Outlet />
      <Navigation />
    </StyledWrapper>
  );
}

export default Root;

const StyledWrapper = styled.div`
  margin: 20px auto;
`;
