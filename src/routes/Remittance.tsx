import { ErrorMessage } from "@hookform/error-message";
import { doc, getDoc, onSnapshot, runTransaction } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import RemitPassword from "../components/Remittance/RemitPassword";
import { db } from "../firebaseApp";
import { userAuthState } from "../recoil_state";
import StyledError from "../styles/StyledError.style";
import Input from "../styles/StyledInput.style";
import AccountType from "../types/accountType";

export interface RemitFormType {
  amount: number;
  transferBank: string;
  transferAccount: number;
}

const checkAccount = (accountNum: number, accountBank: string) => {
  if (accountNum && accountBank) {
    return true;
  } else {
    return false;
  }
};

function Remittance() {
  const [account, setAccount] = useState<AccountType | null>(null);
  const [error, setError] = useState("");
  const [getPW, setGetPW] = useState(true);
  const { accountID } = useParams();
  const navigate = useNavigate();
  const uid = useRecoilValue(userAuthState);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<RemitFormType>();

  const accDoc = doc(db, `UserInfo/${uid}/accounts/${accountID}`);

  useEffect(() => {
    const unsub = onSnapshot(accDoc, (snapshot) => {
      //! Test
      console.log("remmit init", snapshot.data());
      setAccount(snapshot.data() as AccountType);
    });

    return () => unsub();
  }, [accountID, uid]);

  if (!account) {
    return <></>;
  }

  const onSubmit: SubmitHandler<RemitFormType> = async (remitData) => {
    try {
      if (!checkAccount(remitData.transferAccount, remitData.transferBank)) {
        throw new Error("이체 받을 계좌가 잘못되었습니다.");
      }

      const targetDoc = doc(
        db,
        `UserInfo/${uid}/accounts/${remitData.transferAccount}`
      );

      await runTransaction(db, async (transaction) => {
        const account = await transaction.get(accDoc);
        const targetAccount = await transaction.get(targetDoc);
        if (!account.exists()) {
          throw "계좌가 존재하지 않습니다.";
        }
        if (!targetAccount.exists()) {
          throw "거래 대상 계좌가 존재하지 않습니다.";
        }

        const accData = account.data();
        const targetAccData = targetAccount.data();

        if (remitData.amount === 0) {
          throw new Error("이체 금액이 잘못되었습니다.");
        }
        if (remitData.amount > Number(accData.balance)) {
          throw new Error("잔액이 부족합니다.");
        }

        const newBalance = Number(accData.balance) - Number(remitData.amount);
        const newTargetBalance =
          Number(targetAccData.balance) + Number(remitData.amount);

        transaction.update(accDoc, { balance: Number(newBalance) });
        transaction.update(targetDoc, { balance: Number(newTargetBalance) });
      });
      alert("이체 성공!");
      navigate("/assets");
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  //TODO validation 즉각적으로
  return (
    <StyledRemittance>
      <h1>송금하기</h1>
      <div className="account-number">계좌번호: {account.accountNumber}</div>
      <div className="account-name">
        {account.bank} {account.name} <span>계좌에서</span>
      </div>
      <div>출금가능 {account.balance}원</div>

      <RemitForm onSubmit={handleSubmit(onSubmit)}>
        {getPW ? (
          <RemitPassword
            getPW={getPW}
            setGetPW={setGetPW}
          />
        ) : (
          <></>
        )}
        <div className="transfer-amount">
          <Input
            {...register("amount", { required: "필수 요소 입니다" })}
            placeholder={"이체 금액"}
            type="number"
          />{" "}
          원을
        </div>
        <StyledError>
          <ErrorMessage errors={errors} name="amount" />
        </StyledError>
        <div className="transfer-target">
          <Input
            {...register("transferBank", { required: "필수 요소 입니다" })}
            placeholder={"이체 받을 은행"}
          />{" "}
          <StyledError>
            <ErrorMessage errors={errors} name="transferBank" />
          </StyledError>
          <Input
            {...register("transferAccount", { required: "필수 요소 입니다" })}
            placeholder={"이체 받을 계좌번호"}
            type="number"
          />{" "}
          에
          <StyledError>
            <ErrorMessage errors={errors} name="transferAccount" />
          </StyledError>
        </div>
        <p className="text">이체합니다.</p>

        <input type="submit" className="submit" value={"이체하기"} />
        {error ? <StyledError>{error}</StyledError> : null}
      </RemitForm>
    </StyledRemittance>
  );
}

export default Remittance;

const StyledRemittance = styled.div`
  position: relative;

  h1 {
    margin-bottom: 6rem;
  }
  div {
    &.account-number {
      margin-bottom: 0.6rem;
      font-size: 2rem;
      font-weight: 500;
    }
    font-size: 2.4rem;
    font-weight: 700;

    &.account-name {
      margin-bottom: 1rem;
      span {
        font-weight: 500;
      }
    }
  }
`;

const RemitForm = styled.form`
  margin-top: 10vh;
  input {
    text-align: right;
  }

  .transfer-amount {
    margin-bottom: 2rem;
  }
  .transfer-target {
    text-align: right;
  }
  .text {
    text-align: right;
    margin-top: 2rem;
    font-size: 2.4rem;
    font-weight: 600;
  }

  .submit {
    display: block;
    margin: 2rem 0 0 auto;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 700;
    background-color: ${(p) => p.theme.colors.point};
    color: ${(p) => p.theme.subFont};
    border-radius: ${(p) => p.theme.borderRadius};
  }
`;
