import { ErrorMessage } from "@hookform/error-message";
import { FirebaseError } from "firebase/app";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, db } from "../../firebaseApp";
import StyledInput from "../../styles/StyledInput.style";
import AccountType from "../../types/accountType";
import Input from "./AccountInput";

function AddAccountForm() {
  const [error, setError] = useState("");
  const { register, handleSubmit, formState } = useForm<AccountType>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AccountType> = async (accountInfoArg) => {
    setError("");
    const accountInfo: AccountType = {
      ...accountInfoArg,
      balance: 0,
      lastTradeID: "",
    };

    try {
      const uid = auth.currentUser?.uid;
      if (!uid) {
        throw new Error("유저 정보가 없습니다.");
      }
      const accountRef = doc(
        db,
        `UserInfo/${uid}/accounts/${accountInfo.accountNumber}`
      );

      //! Test
      console.log("account add", accountInfo);
      ////

      const accDoc = await getDoc(accountRef);
      if (accDoc.exists()) {
        throw new Error("이미 존재하는 계좌번호 입니다.");
      } else {
        await setDoc(accountRef, accountInfo);
        alert(
          `${accountInfo.name}(${accountInfo.accountNumber}) 계좌가 정상적으로 추가되었습니다.`
        );
        navigate("../");
      }
      ////
    } catch (err) {
      const error = err as FirebaseError;
      if (error.message) {
        setError(error.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {error && <p className="add-account-error">{error}</p>}

      <Input
        label={"은행"}
        id={"bank"}
        required={true}
        register={register}
        formState={formState}
      />
      <Input
        id={"name"}
        label="계좌 별명"
        required={true}
        register={register}
        formState={formState}
      />
      <Input
        id={"accountNumber"}
        label="계좌 번호"
        required={true}
        type={"number"}
        register={register}
        formState={formState}
      />
      <input type={"submit"} value="계좌 만들기" className="add-submit" />
    </StyledForm>
  );
}

export default AddAccountForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  input {
    margin: 1rem auto;
  }

  .add-submit {
    box-sizing: border-box;
    padding: 1rem 1.8rem;
    border-radius: ${(p) => p.theme.borderRadius};
    color: ${(p) => p.theme.subFont};
    background-color: ${(p) => p.theme.colors.sub};
  }

  .add-account-error {
    width: calc(60vw + 4rem);
    margin: 0 auto;
    padding: 0 0 1rem 2rem;

    font-size: 1.4rem;
    font-weight: 600;
    color: ${(p) => p.theme.errorColor};
  }
`;
