import { DefaultTheme } from "styled-components";

// const makeHexdec = (num: number) =>
//   num.toString(16).length === 1 ? "0" + num.toString(16) : num.toString(16);

// const makeHexdecColor = (...num: number[]) =>
//   num.reduce((prev, n) => prev + makeHexdec(n), "");

export const theme: DefaultTheme = {
  colors: {
    background: "#e6e6e6",
    main: "#fefefe",
    sub: "rgb(54, 35, 183)", //- #3623b7
    point: "rgb(3, 203, 231)", //- #03cbe7
  },
  borderRadius: "1.5rem",
  fontColor: "#161616",
  subFont: "#fefefe",
  errorColor: "#EB3F06",
  shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  navHight: "8rem",
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      sub: string;
      point: string;
    };
    borderRadius: string;
    fontColor: string;
    subFont: string;
    errorColor: string;
    shadow: string;
    navHight: string;
  }
}
