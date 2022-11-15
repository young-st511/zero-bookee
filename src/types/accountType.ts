import TransactionType from "./transactionType";

interface AccountType {
  name: string;
  accountNumber: number;
  bank: string;
  balance: number;
  lastTrade: TransactionType;
  transactionsID: string;
}

export default AccountType;