import { TransactionType } from "./transactionType";

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: TransactionType;
    category: string;
    createdAt: string;
}