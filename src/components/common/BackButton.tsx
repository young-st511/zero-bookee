import { Link } from "react-router-dom";
import styled from "styled-components";

function BackButton({ to = "../" }: { to?: string }) {
  return (
    <StyledBackButton>
      <Link to={to} className={"back-button"}>
        ←
      </Link>
    </StyledBackButton>
  );
}

export default BackButton;

const StyledBackButton = styled.div`
  .back-button {
    display: block;
    margin-bottom: 5rem;

    font-size: 3rem;
    text-decoration: none;
  }
`;
