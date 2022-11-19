import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';

import Transaction from './Transaction/Transaction';

import s from './TransactionsList.module.scss';

const TransactionsList = ({filterParam}) => {
  const { transactions } = useSelector(selectTransactions);
  const transactionsFiltered = transactions.filter(transaction => transaction.type === filterParam)

  return (
    <div className={s.TransactionsList}>
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
