import { atom } from "recoil";
import UserInfoType from "./types/userInfoType";

const logInPageState = atom({
  key: "logInPageState",
  default: false,
});

const userAuthState = atom<string | null>({
  key: "userAuthState",
  default: null,
});

const userState = atom<UserInfoType | null>({
  key: "userState",
  default: null,
});

export { userState, logInPageState, userAuthState };
