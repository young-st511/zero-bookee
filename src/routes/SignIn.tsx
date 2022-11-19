import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserInfoType from "../types/userInfoType";
import { auth, db } from "../firebaseApp";
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { ErrorMessage } from "@hookform/error-message";

// type SignInFormType = { isNaver: boolean };

//! React Hook Form 적용할 것!!
//TODO 이미 있는 아이디일 경우 바로 로그인하기
function SignInForm() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoType>();
  const navigate = useNavigate();

  type InputProps = {
    id: keyof UserInfoType;
    label: string;
    required?: boolean;
    options?: { [key: string]: string };
    type?: string;
  };

  const Input = ({ id, label, required, options, type }: InputProps) => {
    return (
      <>
        <input
          {...register(id, {
            ...options,
            required: required ? "필수 요소 입니다" : false,
          })}
          placeholder={label}
          type={type || "text"}
        />
        <ErrorMessage
          name={id}
          errors={errors}
          render={({ message, messages }) => (
            <>
              <p key={"error"} className={"signin-error"}>
                {message}
              </p>
              {messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))}
            </>
          )}
        />
      </>
    );
  };

  const onSubmit: SubmitHandler<UserInfoType> = async (userInfoArg) => {
    console.log(userInfoArg);
    const userInfo = { ...userInfoArg };

    try {
      if (!userInfoArg.userPassword) {
        throw new Error("비밀번호가 없습니다");
      }
      const data = await createUser(
        auth,
        userInfoArg.userEmail,
        userInfoArg.userPassword
      );

      delete userInfo.userPassword;
      console.log("user", data);
      console.log("userInfo", userInfo);

      const uid = data.user.uid;

      await setDoc(doc(db, "UserInfo", uid), userInfo);

      navigate("/assets");
    } catch (err) {
      if (err) {
        const error = err as FirebaseError;
        setError(error.code);
        console.log(error.message);
      }
    }
  };

  //# Input 컴포넌트

  ////

  return (
    <SignInWrapper>
      <Link to={"../auth"} className={"back-button"}>
        ←
      </Link>
      <h2>Sign In</h2>
      {/* {isNaver && <div>Naver 아이디와 연동</div>} */}

      {/* 파이어베이스 에러 */}
      {error && <p className="signin-error">Err: {error}</p>}

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

        {/* 파이어베이스 에러 */}
        {error && <p className="signin-error">Err: {error}</p>}
        <input type="submit" value="제출" />
      </Form>
    </SignInWrapper>
  );
}

export default SignInForm;

const SignInWrapper = styled.div`
  margin: 0 2rem;
  padding-bottom: 3rem;

  .back-button {
    display: block;
    margin-bottom: 5rem;

    font-size: 3rem;
    text-decoration: none;
  }

  .signin-error {
    width: calc(60vw + 4rem);
    margin: 0.5rem auto 0 auto;
    padding: 0;

    font-size: 1.4rem;
    font-weight: 600;
    color: ${(p) => p.theme.errorColor};
  }
`;

const Form = styled.form`
  input {
    display: block;
    width: 60vw;
    margin: 2rem auto 0 auto;
    padding: 1.5rem 2rem;

    color: ${(p) => p.theme.fontColor};
    background-color: #fefefe;
    border: none;
    border-radius: ${(p) => p.theme.borderRadius};
  }
`;
