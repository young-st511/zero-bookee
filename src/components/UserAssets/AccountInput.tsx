import { ErrorMessage } from "@hookform/error-message";
import { FormState, useForm, UseFormRegister } from "react-hook-form";
import StyledInput from "../../styles/StyledInput.style";
import AccountType from "../../types/accountType";

type InputProps = {
  id: keyof AccountType;
  label: string;
  required?: boolean;
  options?: { [key: string]: string };
  type?: string;
  register: UseFormRegister<AccountType>;
  formState: FormState<AccountType>;
};

const AccountInput = ({
  id,
  label,
  required,
  options,
  type,
  register,
  formState: { errors },
}: InputProps) => {
  return (
    <>
      <StyledInput
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
            <p key={"error"} className={"add-account-error"}>
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

export default AccountInput;
