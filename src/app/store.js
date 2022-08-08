import { configureStore } from '@reduxjs/toolkit';
import { transactionReducer } from '../state/transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer
  },
});
