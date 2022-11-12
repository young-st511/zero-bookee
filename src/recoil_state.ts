import { User } from "firebase/auth";
import { atom } from "recoil";

const logInPageState = atom({
  key: "logInPageState",
  default: false,
});

const userAuthState = atom<string | null>({
  key: "userAuthState",
  default: null,
});

// const userState = atom<User | null>({
//   key: "userState",
//   default: null,
// });

export { logInPageState, userAuthState };
