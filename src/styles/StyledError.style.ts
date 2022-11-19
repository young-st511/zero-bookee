import styled from "styled-components";

const StyledError = styled.p`
  width: calc(60vw + 4rem);
  margin: 0 auto;
  padding: 0 0 1rem 2rem;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${(p) => p.theme.errorColor};
`;

export default StyledError;
