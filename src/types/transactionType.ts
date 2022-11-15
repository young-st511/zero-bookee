interface TransactionType {
  id: string;
  type: "receiving" | "drawing";
  amount: number;
  note: string;
  timeStamp: Date;
}

export default TransactionType;
