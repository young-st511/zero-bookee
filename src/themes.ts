import { DefaultTheme } from "styled-components";

// const makeHexdec = (num: number) =>
//   num.toString(16).length === 1 ? "0" + num.toString(16) : num.toString(16);

// const makeHexdecColor = (...num: number[]) =>
//   num.reduce((prev, n) => prev + makeHexdec(n), "");

export const theme: DefaultTheme = {
  colors: {
    main: "rgb(54, 35, 183)", //- #3623b7
    sub: "rgb(3, 203, 231)", //- #03cbe7
  },
  borderRadius: "1.5rem",
  fontColor: "#FFFFFF",
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      sub: string;
    };
    borderRadius: string;
    fontColor: string;
  }
}
