import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: SUIT;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor}
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
    font-size: 30px;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  .outlet {
    margin: 0px 20px;
  }
`;

export default GlobalStyle;
