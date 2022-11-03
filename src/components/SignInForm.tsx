import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserInfoType from "../types/userInfoType";

function SignInForm() {
  const [isNaver, setIsNaver] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);

  const handleInputChange = ({ target }: HTMLInputElement) => {};

  return (
    <div>
      <Link to={".."}>←</Link>
      <h2>Sign In</h2>
      {isNaver && <div>Naver 아이디와 연동</div>}

      <form autoSave="true" id="sign-in-form">
        <label htmlFor={"companyName"}>
          회사명
          <input type={"text"} id={"companyName"} />
        </label>
        <label htmlFor={"businessNumber"}>
          사업자등록번호
          <input type={"text"} id={"businessNumber"} />
        </label>
        <label htmlFor={"companyAdress"}>
          회사주소
          <input type={"text"} id={"companyAdress"} />
        </label>
        <label htmlFor={"ownership"}>
          사업자 구분
          <input type={"text"} id={"ownership"} />
        </label>
        <label htmlFor={"ownerName"}>
          대표자 이름
          <input type={"text"} id={"ownerName"} />
        </label>
        <label htmlFor={"ownerResisterNumber"}>
          대표자 주민등록번호
          <input type={"text"} id={"ownerResisterNumber"} />
        </label>
        <label htmlFor={"companyCallNumber"}>
          회사 대표 전화번호
          <input type={"text"} id={"companyCallNumber"} />
        </label>
        <label htmlFor={"faxNumber"}>
          팩스 번호
          <input type={"text"} id={"faxNumber"} />{" "}
        </label>
        <label htmlFor={"companyEmail"}>
          회사 대표 이메일
          <input type={"text"} id={"companyEmail"} />{" "}
        </label>
        <label htmlFor={"corporationNumber"}>
          법인 번호
          <input type={"text"} id={"corporationNumber"} />{" "}
        </label>
        <label htmlFor={"businessType"}>
          업태
          <input type={"text"} id={"businessType"} />{" "}
        </label>
        <label htmlFor={"businessItems"}>
          업종
          <input type={"text"} id={"businessItems"} />{" "}
        </label>
        <label htmlFor={"userEmail"}>
          아이디(이메일)
          <input type={"text"} id={"userEmail"} />{" "}
        </label>
        <label htmlFor={"recievingAdAgree"}>
          광고성 메일 수신 동의
          <input type={"text"} id={"recievingAdAgree"} />{" "}
        </label>
        <label htmlFor={"position"}>
          직급
          <input type={"text"} id={"position"} />{" "}
        </label>
        <label htmlFor={"openingDay"}>
          회사 개업일
          <input type={"text"} id={"openingDay"} />{" "}
        </label>
        <label htmlFor={"taxOffice"}>
          관할 세무서
          <input type={"text"} id={"taxOffice"} />
        </label>
      </form>
    </div>
  );
}

export default SignInForm;
