import TransactionType from "./transactionType";

interface AccountType {
  name: string;
  accountNumber: number;
  bank: string;
  balance: number;
  ownerName: string;
  lastTradeID: string;
  transactionsID: string;
}

export default AccountType;
