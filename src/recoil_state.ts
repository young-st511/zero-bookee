import { User } from "firebase/auth";
import { atom } from "recoil";

const userAuthState = atom({
  key: "userAuthState",
  default: false,
});

const userState = atom<User | null>({
  key: "userState",
  default: null,
});

export { userState, userAuthState };
