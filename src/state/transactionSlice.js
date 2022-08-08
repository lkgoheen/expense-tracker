import { createSlice } from "@reduxjs/toolkit";
import { TRANSACTIONS } from "../app/shared/TRANSACTIONS";

const initialState = {
    transactionsArray: TRANSACTIONS
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            const newTransaction = action.payload
            state.transactionsArray.push(newTransaction);
        },
        removeTransaction: (state, action) => {
            return {
                ...state,
                transactionsArray: state.transactionsArray.filter(transaction => transaction.id !== action.payload)
            };
        }
    }
});

export const transactionReducer = transactionsSlice.reducer;

export const { addTransaction } = transactionsSlice.actions;

export const { removeTransaction } = transactionsSlice.actions;

export const selectAllTransactions = (state) => {
    return state.transactions.transactionsArray;
};

export const selectTransactionById = (id) => (state) => {
    return state.transactions.transaction.find((transaction) => transaction.id === parseInt(id));
};

