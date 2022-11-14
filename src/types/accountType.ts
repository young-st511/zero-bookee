import TransactionType from "./transactionType";

interface AccountType {
  name: string;
  accountNumber: number;
  balance: number;
  lastTrade: TransactionType;
  transactionsID: string;
}

export default AccountType;