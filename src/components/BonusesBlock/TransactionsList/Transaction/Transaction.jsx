import React from 'react';

import s from './Transaction.module.scss';

const Transaction = ({ transaction }) => {
  const { amount, amountStatus, notes, type, transactionStatus, createdAt } =
    transaction;

  let date = new Date(createdAt);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return (
    <div className={s.transaction}>
      <span className={s.amount}>{amount}</span>
      <span className={s.createdAt}>
        <span className={s.date}>{`${day}.${month}.${year}`}</span>
        <span className={s.time}>{`${hours}:${minutes}:${seconds}`}</span>
      </span>
      <span className={s.amountStatus}>{amountStatus}</span>
      <span className={s.type}>{type}</span>
      {/* <span className={s.transactionStatus}>{transactionStatus}</span> */}
      <span className={s.notes}>{notes}</span>
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
