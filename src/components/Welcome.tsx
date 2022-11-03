import { Dispatch, SetStateAction } from "react";

type Props = { setIsLogInPage: Dispatch<SetStateAction<boolean>> };
function Welcome({ setIsLogInPage }: Props) {
  return (
    <div>
      <h2>제로부기에 오신 것을 환영합니다!</h2>
      <button className="to-log-in" onClick={() => setIsLogInPage(true)}>
        제로부기 아이디로 로그인
      </button>
    </div>
  );
}

export default Welcome;
