import React from 'react';

import s from './Transaction.module.scss';

const Transaction = ({ transaction }) => {
  const {
    amount = null,
    amountStatus = null,
    notes = null,
    type = null,
    createdAt = null,
  } = transaction;
  const transactionStyleClass = [
    s.transaction,
    amount > 0 ? s.income : s.expense,
  ].join(' ');
  function numberPadStart(n) {
    return n.toString().padStart(2, '0');
  }
  let date = new Date(createdAt);
  let day = numberPadStart(date.getDate());
  let month = numberPadStart(date.getMonth() + 1);
  let year = date.getFullYear().toString();
  let hours = numberPadStart(date.getHours());
  let minutes = numberPadStart(date.getMinutes());
  let seconds = numberPadStart(date.getSeconds());

  return (
    <div className={transactionStyleClass}>
      <span className={[s.col1, s.title].join(' ')}>Amount</span>
      <span className={[s.col2, s.amount].join(' ')}>
        <span>{amount > 0 ? '+' : '-'}</span>
        <span>{amount}</span>
      </span>
      <span className={[s.col1, s.title].join(' ')}>Date/Time</span>
      <span className={[s.col2, s.createdAt].join(' ')}>
        <span className={s.date}>{`${day}.${month}.${year}`}</span>{' '}
        <span className={s.time}>{`${hours}:${minutes}:${seconds}`}</span>
      </span>
      <span className={[s.col1, s.title].join(' ')}>Status</span>
      <span className={[s.col2, s.amountStatus].join(' ')}>{amountStatus}</span>
      <span className={[s.col1, s.title].join(' ')}>Type</span>
      <span className={[s.col2, s.type].join(' ')}>{type}</span>
      <span className={[s.col1, s.title].join(' ')}>Note</span>
      <span className={[s.col2, s.note].join(' ')} title={notes}>
        {notes}
      </span>
    </div>
  );
};

export default Transaction;
// const transaction = {
//   amount: 1000,
//   amountStatus: 'blocked',
//   createdAt: '2022-11-10T20:16:48.299Z',
//   id: 'fb4125aa-1b03-4c88-b17d-256c629cbd21',
//   notes: 'Test 1',
//   transactionStatus: 'debit',
//   type: 'personal',
// };
