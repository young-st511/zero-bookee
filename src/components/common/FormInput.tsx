import { ErrorMessage } from "@hookform/error-message";
import { FormState, useForm, UseFormRegister } from "react-hook-form";
import UserInfoType from "../../types/userInfoType";

type InputProps = {
  id: keyof UserInfoType;
  label: string;
  required?: boolean;
  options?: { [key: string]: string };
  type?: string;
  register: UseFormRegister<UserInfoType>;
  formState: FormState<UserInfoType>;
};

const FormInput = ({
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

export default FormInput;
