import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserInfoType from "../types/userInfoType";
import { auth } from "../firebaseApp";
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type InputProps = {
  id: keyof UserInfoType;
  label: string;
  required?: boolean;
  options?: { [key: string]: string };
  type?: string;
};

// type SignInFormType = { isNaver: boolean };

//! React Hook Form 적용할 것!!
//TODO 비밀번호 해싱하기
//TODO 이미 있는 아이디일 경우 바로 로그인하기
function SignInForm() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoType>();

  const onSubmit: SubmitHandler<UserInfoType> = async (data) => {
    console.log(data);

    // e.preventDefault();
    // console.log(userInfo);

    // try {
    //   const data = await createUser(
    //     auth,
    //     userInfo.userEmail,
    //     userInfo.userPassword
    //   );
    //   //! Test
    //   console.log(data);
    // } catch (error: unknown) {
    //   if ("message" in (error as Error)) {
    //     setError((error as Error).message);
    //   }
    //   console.log(error);
    // }
  };

  //# Input 컴포넌트
  const Input = ({ id, label, required, options, type }: InputProps) => {
    return (
      <>
        <input
          {...register(id, { ...options, required: required ?? false })}
          placeholder={label}
          type={type || "text"}
        />
        <ErrorMessage
          name={id}
          errors={errors}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        />
      </>
    );
  };
  ////

  return (
    <SignInWrapper>
      <Link to={"../auth"}>←</Link>
      <h2>Sign In</h2>
      {/* {isNaver && <div>Naver 아이디와 연동</div>} */}

      <Form autoSave="true" id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        {/* 회원 정보 */}
        <Input label={"아이디(이메일)"} id={"userEmail"} required={true} />
        <Input
          label={"비밀번호"}
          type={"password"}
          id={"userPassword"}
          required={true}
        />

        <Input label="직급" id={"position"} />

        {/* 회사 정보 */}
        <Input label="회사명" id={"companyName"} required={true} />
        <Input label="사업자등록번호" id={"businessNumber"} required={true} />
        <Input label="회사주소" id={"companyAdress"} required={true} />
        <Input label="사업자 구분" id={"ownership"} required={true} />
        <Input label="대표자 이름" id={"ownerName"} required={true} />
        <Input label="대표자 주민등록번호" id={"ownerResisterNumber"} />
        <Input
          label="회사 대표 전화번호"
          id={"companyCallNumber"}
          required={true}
        />
        <Input label="팩스 번호" id={"faxNumber"} />
        <Input label="회사 대표 이메일" id={"companyEmail"} required={true} />
        <Input label="법인 번호" id={"corporationNumber"} />
        <Input label="업태" id={"businessType"} />
        <Input label="업종" id={"businessItems"} />

        <Input
          label="회사 개업일"
          type={"date"}
          id={"openingDay"}
          required={true}
        />

        <Input label="관할 세무서" id={"taxOffice"} required={true} />

        <Input
          label="광고성 메일 수신 동의"
          id={"recievingAdAgree"}
          required={true}
        />

        <input type="submit" value="제출" />
      </Form>
    </SignInWrapper>
  );
}

export default SignInForm;

const SignInWrapper = styled.div`
  margin: 0 20px;
  
`;

const Form = styled.form`
  input {
    display: block;
  }
`;
