import { User } from "firebase/auth";
import { atom } from "recoil";

const logInPageState = atom({
  key: "logInPageState",
  default: false,
});

const userAuthState = atom({
  key: "userAuthState",
  default: false,
});

const userState = atom<User | null>({
  key: "userState",
  default: null,
});

export { logInPageState, userState, userAuthState };
