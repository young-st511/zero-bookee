import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: SUIT;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor};
    font-size: 1.6rem;
  }
  body {
    margin: 0;
    align-items: center;
    background-color: ${(props) => props.theme.colors.main};
  }
  button {
    background-color: ${({ theme }) => theme.colors.sub};
    border: none;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  .back-button {
    font-feature-settings: "ss18";
  }
`;

export default GlobalStyle;
