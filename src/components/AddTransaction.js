import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, selectAllTransactions } from '../state/transactionSlice';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const transactionsArray = useSelector(selectAllTransactions);

    const dispatch = useDispatch();

    const onSubmit = e => {
      e.preventDefault();

      const newTrans = {
        id: transactionsArray.length + 1,
        text,
        amount: parseInt(amount)
      }

      console.log(newTrans);

      dispatch(addTransaction(newTrans));
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
