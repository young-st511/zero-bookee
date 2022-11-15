import styled from "styled-components";
import AccountType from "../../types/accountType";

function AssetAccount({ accountInfo }: { accountInfo: AccountType }) {
  return (
    <StyledAccount>
      <div className="account-info">
        <div>
          <h3>{accountInfo.name}</h3>
          <p className="account-number">{accountInfo.accountNumber}</p>
        </div>
        <p className="balance">{accountInfo.balance} 원</p>
      </div>
      <div className="buttons">
        <button type="button" className="remittance-button">
          송금
        </button>
        <button type="button" className="detail-button">
          상세
        </button>
      </div>
    </StyledAccount>
  );
}

export default AssetAccount;

const StyledAccount = styled.div`
  display: flex;
  align-items: center;
  width: 85vw;
  height: 15rem;
  margin: 2rem 0;
  padding: 2rem 2rem;
  box-sizing: border-box;

  border-radius: ${(p) => p.theme.borderRadius};
  background-color: ${(p) => p.theme.colors.main};

  .account-info {
    display: flex;
    flex: 2;
    flex-direction: column;

    h3 {
      font-size: 2.2rem;
      font-weight: 700;
    }

    p {
      margin: 0.5rem 0 1rem 0;
      font-size: 1.8rem;
      font-weight: 500;

      &.account-number {
        font-weight: 300;
        font-variant-numeric: tabular-nums;
      }

      &.balance {
        align-self: flex-end;
        margin-top: 0.5rem;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;

    font-size: 1.4rem;
    font-weight: 600;

    button {
      margin: 0.3rem 0;
      padding: 1.2rem 1rem;
      color: ${(p) => p.theme.subFont};
      border-radius: 1.4rem;
      background-color: ${(p) => p.theme.colors.point};
    }
  }
`;
