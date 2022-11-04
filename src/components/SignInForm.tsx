import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserInfoType from "../types/userInfoType";
import { auth } from "../firebaseApp";
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";

// type SignInFormType = { isNaver: boolean };

//! React Hook Form 적용할 것!!
//TODO 비밀번호 해싱하기
//TODO 이미 있는 아이디일 경우 바로 로그인하기
function SignInForm() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);
  const [error, setError] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget;
    const { id, value } = currentTarget;
    setUserInfo({
      ...userInfo,
      [id]: value,
    } as unknown as UserInfoType);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInfo);

    try {
      const data = await createUser(
        auth,
        userInfo.userEmail,
        userInfo.userPassword
      );
      //! Test
      console.log(data);
    } catch (error: unknown) {
      if ("message" in (error as Error)) {
        setError((error as Error).message);
      }
      console.log(error);
    }
  };

  return (
    <div>
      <Link to={"../auth"}>←</Link>
      <h2>Sign In</h2>
      {/* {isNaver && <div>Naver 아이디와 연동</div>} */}
      <div className="error">{error}</div>

      <form autoSave="true" id="sign-in-form" onSubmit={handleSubmit}>
        {/* 회원 정보 */}
        <label htmlFor={"userEmail"}>
          아이디(이메일)
          <input
            type={"text"}
            id={"userEmail"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"userPassword"}>
          비밀번호
          <input
            type={"password"}
            id={"userPassword"}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor={"position"}>
          직급
          <input type={"text"} id={"position"} onChange={handleChange} />
        </label>

        {/* 회사 정보 */}
        <label htmlFor={"companyName"}>
          회사명
          <input
            type={"text"}
            id={"companyName"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"businessNumber"}>
          사업자등록번호
          <input
            type={"text"}
            id={"businessNumber"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"companyAdress"}>
          회사주소
          <input
            type={"text"}
            id={"companyAdress"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"ownership"}>
          사업자 구분
          <input
            type={"text"}
            id={"ownership"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"ownerName"}>
          대표자 이름
          <input
            type={"text"}
            id={"ownerName"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"ownerResisterNumber"}>
          대표자 주민등록번호
          <input
            type={"text"}
            id={"ownerResisterNumber"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"companyCallNumber"}>
          회사 대표 전화번호
          <input
            type={"text"}
            id={"companyCallNumber"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"faxNumber"}>
          팩스 번호
          <input type={"text"} id={"faxNumber"} onChange={handleChange} />
        </label>
        <label htmlFor={"companyEmail"}>
          회사 대표 이메일
          <input
            type={"text"}
            id={"companyEmail"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"corporationNumber"}>
          법인 번호
          <input
            type={"text"}
            id={"corporationNumber"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"businessType"}>
          업태
          <input type={"text"} id={"businessType"} onChange={handleChange} />
        </label>
        <label htmlFor={"businessItems"}>
          업종
          <input type={"text"} id={"businessItems"} onChange={handleChange} />
        </label>

        <label htmlFor={"openingDay"}>
          회사 개업일
          <input
            type={"date"}
            id={"openingDay"}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={"taxOffice"}>
          관할 세무서
          <input
            type={"text"}
            id={"taxOffice"}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor={"recievingAdAgree"}>
          광고성 메일 수신 동의
          <input
            type={"text"}
            id={"recievingAdAgree"}
            required
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default SignInForm;
