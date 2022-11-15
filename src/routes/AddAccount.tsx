import styled from "styled-components";
import AddAccountForm from "../components/UserAssets/AddAccountForm";

function AddAccount() {
  return (
    <StyledAddAccount>
      <h2>계좌 추가</h2>
      <AddAccountForm />
    </StyledAddAccount>
  );
}

export default AddAccount;

const StyledAddAccount = styled.div`
  width: 100%;
  margin-top: 20vh;
  
  h2 {
    margin: 2rem 3rem;
  }
`;
