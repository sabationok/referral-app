import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';

// import Transaction from './Transactions/Transaction';
// import s from './TransactionsList.module.scss';

const TransactionsList = () => {
  const { transactions } = useSelector(selectTransactions);

  console.log(transactions);

  return <div>TransactionsList</div>;
};

export default TransactionsList;
// amount
// 1000
// amountStatus
// "blocked"
// createdAt
// "2022-11-10T20:16:48.299Z"
// id
// "fb4125aa-1b03-4c88-b17d-256c629cbd21"
// notes
// "Test 1"
// transactionStatus
// "debit"
// type
// "personal"
