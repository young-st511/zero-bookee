interface TransactionType {
  id: string;
  type: "income" | "outcome";
  amount: number;
  note: string;
}

export default TransactionType;
